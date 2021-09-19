import NavBar from '../../components/Admin/NavBar/NavBar';
import AppBar from '../../components/Admin/NavBar/AppBar';
import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import { Grid,MenuItem } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import jsPDF from 'jspdf';
import "jspdf-autotable"
import { allPayments } from '../../services/getAllPayments';

const useStyles = makeStyles({
	root: {
		width: '100%'
	},
	container: {
		maxHeight: 440
	}
});

export default function Index() {
	const classes = useStyles();
	const [page, setPage] = useState(1);
	const [username,setUsername] = useState("");
	const[books,setBooks] = useState([]);
	const[total,setTotal] = useState('');
	const [payment,setPayment] = useState([]);


	function createData(name, book, price, qty, status) {
		return { name, book, price, qty, status };
	}

	const tableValues = [
		createData('kajan', 'secret', 2, 2000.00, "paid"),
		createData('john', 'shakesphere', 1, 2500.00, "paid"),
		createData('peter', 'amazon', 1, 1600.00, "paid"),
		createData('williams', 'strange things', 1, 5000.00, "paid"),
		createData('sid', 'secret', 1, 2000.00, "paid"),
		createData('shaun', 'amazon', 1, 1600.00, "paid"),
	];

	const getPaymentDetails = async () => {
		const res = await allPayments();
		console.log(res.data);
		setPayment(res.data);  
	};

    useEffect(() => {
        getPaymentDetails();
    }, []);

	const tablehead = [
		{ name: 'Customer Name', align: 'left', width: '20%' },
		{ name: 'Book', align: 'left', width: '40%' },
		{ name: 'Quantity', align: 'left', width: '10%' },
		{ name: 'Total', align: 'left', width: '10%' },
		{ name: 'Status', align: 'left', width: '10%' },
		{ name: 'Actions', align: 'center', width: '20%' }
	];

	const generatePDF = (invoicedata) => {
		//initilize the pds
		const doc = new jsPDF();

		//column definition
		const tableColumns = ["Name", "Book name", "Quantity", "Price"];
		const tableRows = [];

		const rowdata = [
			invoicedata.name,
			invoicedata.book,
			invoicedata.price,
			invoicedata.qty,
			invoicedata.status
		];

		tableRows.push(rowdata);

		doc.autoTable(tableColumns, tableRows, { startY: 30 });
		const date = Date().split(" ");
		//the filename will be the current systems date
		doc.setFontSize(12);

		const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
		doc.text(" Thank you for choosing BookLab!!!", 10, 15);
		doc.text("Invoice to :" + invoicedata.name, 13, 25);
		doc.text(`status:` + invoicedata.status, 170, 60);
		doc.save(`report_${dateStr}.pdf`);
	}

	return (
		<>
			<div>
				<>
					<AppBar />
					<NavBar />
					<Grid container style={{paddingTop:"70px"}}>
						<Grid item sm={2}></Grid>
						<Grid item sm={10}>
							<div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
								<Paper style={{ paddingBottom: '10px' }} className={classes.root}>
									<TableContainer className={classes.container}>
										<Table stickyHeader aria-label="sticky table">
											<TableHead>
												<TableRow>
													{tablehead.map((column, index) => (
														<TableCell
															key={index}
															align={column.align}
															style={{ minWidth: column.minWidth }}
														>
															{column.name}
														</TableCell>
													))}
												</TableRow>
											</TableHead>
											<TableBody>
												{payment.map(row => {
													return (
														<>
															<TableRow>
																<TableCell>{row.username}</TableCell>
															<TableCell>
																	{row.books.map(book =>{
																		return(
																			<MenuItem>
																			{book.title}
																			</MenuItem>
																			
																			
																		)
																		})}
																		</TableCell>
																		
																
																
																<TableCell>
																	{row.total}
																</TableCell>
																<TableCell>
																	{row.quantity}
																</TableCell>
																<TableCell>
																	{row.status}
																</TableCell>
																<TableCell width="25%" align="center">
																	{/* <Button
																		onClick={() => generatePDF(row)}
																		title="Generate bill"
																		style={{ color: 'teal' }}
																	>
																		{' '}
																		<DescriptionIcon />
																	</Button> */}
																	<Button
																		title="Delete"
																		style={{ color: 'red' }}
																	>
																		{' '}
																		<DeleteIcon />
																	</Button>
																</TableCell>
															</TableRow>
														</>
													);
												})}
											</TableBody>
										</Table>
									</TableContainer>
								</Paper>
							</div>
						</Grid>
					</Grid>
				</>
			</div>
		</>
	);
}

