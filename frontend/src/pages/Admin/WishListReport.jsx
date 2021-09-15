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

import styles from "../WishList/WishList.module.scss";

import { AppLayout, TopProductsTable } from "../../components";
import NavBar from "../../components/Admin/NavBar/NavBar";
import AppBar from "../../components/Admin/NavBar/AppBar";
import { getTopFiveTtems } from "../../services/wishlistService";

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

  async function getTopBooks(){
    const response = await getTopFiveTtems();

    if (response) {
      console.log(response)
      let books = []
      
      response.forEach(item => {
        const listitem={
          id: item._id,
          title: item.bookinfo.title,
          publisher: item.bookinfo.publisher,
          price: item.bookinfo.price,
          isbn: item.bookinfo.isbn,
          count: item.counter
        }
        books.push(listitem)
      });

      setTopBooks(books)

    } else {
      console.log(response);
      setError("Error loading top products, please try again later.")
    }

  }

  const generateReport = () => {
    setTimeout(() => {
      setSuccess("Report downloaded");
      setTimeout(() => setSuccess(null), 2000);
    }, 500);

    //setError("Error generating report, please try again later.")
  };

  // useEffect(() => generateYears(), [])

  useEffect(() => {
    getTopBooks()
  }, [])

  return (
    <React.Fragment>
      <div>
        <div className="row">
          <AppBar />
        </div>
        <div className="row">
          <div className="col">
            <NavBar />
          </div>
          <div style={{ width: "82vw", height:"100vh" }}>
            <Grid
              container
              className="content-padding"
              className={styles.background}
              style={{ height: "92vh" }}
            >
              <Grid
                item
                sm={3}
                xs={12}
                style={{ marginTop: "30px", borderRight: "1px solid #c8c6c6" }}
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
                    style={{ border: "1px solid #f5d872", width: "90%" }}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WishListReport;
