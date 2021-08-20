import NavBar from '../../components/Admin/NavBar/NavBar';
import AppBar from '../../components/Admin/NavBar/AppBar';

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import { Grid } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import DescriptionIcon from '@material-ui/icons/Description';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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
	



    function createData(name, book, price,status) {
        
        return { name, book,price,status };
      }
      
      const tableValues = [
        createData('kajan','secret',20000.00,"paid"),
        createData('kajan','secret',20000.00,"paid"),
        createData('kajan','secret',20000.00,"paid"),
        createData('kajan','secret',20000.00,"paid"),
        createData('kajan','secret',20000.00,"paid"),
        createData('kajan','secret',20000.00,"paid"),

      
      ];




	const tablehead = [
		{ name: 'Customer Name', align: 'left', width: '20%' },
		{ name: 'Book', align: 'left', width: '20%' },
		{ name: 'total', align: 'left', width: '20%' },
        { name: 'status', align: 'left', width: '20%' },
		{ name: 'Actions', align: 'center', width: '20%' }
	];

	return (
		<>
			<div>
				
					<>
						
                        <AppBar/>
                        <NavBar/>
                        <Grid container>
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
											{tableValues.map(row => {
												return (
                                                    <>
                                                    <TableRow>
			<TableCell>{row.name}</TableCell>
			<TableCell>
				{row.book}
			</TableCell>
			<TableCell>
				{row.price}
			</TableCell>
            <TableCell>
				{row.status}
			</TableCell>
			<TableCell width="25%" align="center">
				
				
				<Button
					
					
					title="Generate bill"
					style={{ color: 'teal' }}
				>
					{' '}
					<DescriptionIcon />
				</Button>
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

