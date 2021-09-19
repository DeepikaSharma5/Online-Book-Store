import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import jsPDF from "jspdf";

import styles from "../WishList/WishList.module.scss";

import { AppLayout, TopProductsTable } from "../../components";
import NavBar from "../../components/Admin/NavBar/NavBar";
import AppBar from "../../components/Admin/NavBar/AppBar";
import { createReport, getTopFiveTtems } from "../../services/wishlistService";

const WishListReport = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());

  const [years, setYears] = useState([2021, 2020, 2019]);

  // const generateYears = () => {
  //   let year = new Date().getFullYear()
  //   for (let index = 0; index < 3; index++) {
  //     console.log("y ; ",year)
  //     let thisYears = years
  //     thisYears.push(year)
  //     console.log("thisYears ; ",thisYears)
  //     setYears(thisYears)
  //     --year
  //   }

  //   console.log(years)
  // }

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [topBooks, setTopBooks] = useState([]);

  async function getTopBooks() {
    const response = await getTopFiveTtems();

    if (response) {
      let books = [];

      response.forEach((item) => {
        const listitem = {
          id: item._id,
          title: item.bookinfo.title,
          publisher: item.bookinfo.publisher,
          price: item.bookinfo.price,
          isbn: item.bookinfo.isbn,
          count: item.counter,
        };
        books.push(listitem);
      });

      setTopBooks(books);
    } else {
      console.log(response);
      setError("Error loading top products, please try logging in again.");
    }
  }

  async function generateReport() {

    setSuccess(null)
    setError(null)

    const response = await createReport(month+1, year);

    if (response) {
      console.log(response)
      if(response.length === 0){
        setError("No data for this year and month");
      setTimeout(() => setError(null), 4000);
      }else{
        const wishbooks = response;

        const reportDocument = new jsPDF();
        const tableColumns = ["Item Count", "Title", "Author Name", "Publisher", "ISBN","Price"];
        const tableRows = [];   
  
        wishbooks.forEach(book => {
          const bookData = [
            book.counter,
            book.bookinfo.title,
            book.bookinfo.author_name,
            book.bookinfo.publisher,
            book.bookinfo.isbn,
            'LKR ' + book.bookinfo.price +'.00'
        ];
        tableRows.push(bookData);
        });
  
        reportDocument.autoTable(tableColumns, tableRows, { startY: 40 });
        reportDocument.text(`BookLab : Report of Wish Lists for ${months[month]}, ${year}` , 14, 15);
        reportDocument.setFontSize(11);
        const subText = reportDocument.splitTextToSize(`The table shows the count of each item that appeared in a wish list for the month of ${months[month]} in year ${year}.` , 180);
        reportDocument.text(subText , 14, 30);
        reportDocument.save(`BookLab Wish Lists Report - ${months[month]} ${year}.pdf`);
  
        setSuccess("Report downloaded");
        setTimeout(() => setSuccess(null), 2000);
      }
    } else {
      setError("Error generating report, please try logging in again.");
      setTimeout(() => setError(null), 2000);
    }
  }

  // useEffect(() => generateYears(), [])

  useEffect(() => {
    getTopBooks();
  }, []);

  return (
    <React.Fragment>
      <AppBar />
      <Grid container direction="row">
        <Grid item sm={2}>
          <NavBar />
        </Grid>
        <Grid
          item
          sm={10}
          container
          className="content-padding"
          className={styles.background}
          style={{ height: "89.8vh", marginTop: "10.2vh" }}
        >
          <Grid
            item
            sm={3}
            xs={12}
            style={{
              marginTop: "30px",
              borderRight: "1px solid #c8c6c6",
              paddingLeft: "20px",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{ fontWeight: "600" }}
            >
              Wish lists report
            </Typography>
            <Typography
              variant="body1"
              style={{ color: "#5b5b5b", padding: "30px 0px 20px 0px" }}
            >
              Download a report of the performance of products across wish
              lists, by year and month.
            </Typography>
            <FormControl
              variant="filled"
              style={{ backgroundColor: "#ffffff", width: "90%" }}
            >
              <InputLabel>Year</InputLabel>
              <Select
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                label="Year"
              >
                {years?.map((year) => (
                  <MenuItem value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              variant="filled"
              style={{
                backgroundColor: "#ffffff",
                width: "90%",
                marginTop: "10px",
              }}
            >
              <InputLabel>Month</InputLabel>
              <Select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                label="Month"
              >
                {months.map((month, index) => (
                  <MenuItem value={index}>{month}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              className={styles.searchbtn}
              style={{ margin: "20px 0px", width: "90%" }}
              onClick={generateReport}
            >
              Generate Report
            </Button>
            {success ? (
              <Alert
                style={{ border: "1px solid #74c274", width: "90%" }}
                severity="success"
              >
                {success}
              </Alert>
            ) : null}
            {error ? (
              <Alert
                style={{ border: "1px solid #ffca18", width: "90%" }}
                severity="warning"
              >
                {error}
              </Alert>
            ) : null}
          </Grid>
          <Grid
            item
            sm={9}
            xs={12}
            style={{ marginTop: "30px", paddingLeft: "50px" }}
          >
            <Typography
              variant="h5"
              component="h2"
              style={{ color: "#474747", paddingBottom: "30px" }}
            >
              Top 5 most added books in wish lists
            </Typography>
            <TopProductsTable productList={topBooks} />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default WishListReport;
