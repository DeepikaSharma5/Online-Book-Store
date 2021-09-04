import React, { Component } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import NavBar from '../../NavBar/NavBar';
import AppBar from '../../NavBar/AppBar';

class ProcessingPdf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:6060/delivery-status/view')
            .then(response => {
                const status = response.data;
                this.setState({ status });
            }).catch(error => {
                alert(error.message);
                console.log("Error", error);
            });
    }

    printDocument() {
        const input = document.getElementById('pdfdiv3');
        html2canvas(input)
            .then((canvas) => {
                var imgWidth = 200;
                var pageHeight = 290;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4')
                var position = 5;
                var heightLeft = imgHeight;
                pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);
                pdf.save("Delivered_Orders.pdf");
            });
    }

    render() {
        return (
            <div>
                <AppBar />
                <NavBar />
                <div id="pdfdiv3" style={{ maxWidth: '100%', background: '#ffffff', marginBottom: "30px" }}>
                    <div className="card-body" style={{ maxWidth: '60%', margin: 'auto', padding: '10px', background: '#ffffff', marginTop: '30px', marginBottom: '30px', borderColor: 'black', border: 'double' }}>
                        <div className="row">
                            <div>
                                <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', position: 'relative', marginBottom: '-50px', marginTop: '20px' }}>
                                    <h4 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '180%' }}>PROCESSING ORDERS</h4>
                                </div>
                                <table className="table table-bordered" style={{ textAlign: 'center', maxWidth: '80%', margin: 'auto', padding: '10px' }}>
                                    <thead className="thead-light" >
                                        <tr>
                                            <th scope="col" className="w-10">Order ID</th>
                                            <th scope="col" className="w-25">Address </th>
                                            <th scope="col" className="w-10">Phone Number</th>
                                            <th scope="col" className="w-15">Date</th>
                                        </tr>
                                    </thead>
                                    {this.state?.status?.length > 0 && this.state.status.map((item, index) => {
                                        if (item.status === "Processing") {
                                            return (
                                                <tbody key={index}>
                                                    <tr>
                                                        <td>{item._id}</td>
                                                        <td>{item.address1}. {item.address2}, {item.address3}</td>
                                                        <td>{item.phoneNumber}</td>
                                                        <td>{item.date}</td>
                                                    </tr>
                                                </tbody>
                                            )
                                        }
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <center><button style={{ marginTop: '90px', marginBottom: '200px', width: "50%", cursor: "pointer", backgroundColor: "orange", border: "black", padding: "5px 20px", margin: "20px 10px", borderRadius: "2px", fontWeight: "bold" }} onClick={this.printDocument}  >Download PDF</button></center>

            </div>

        );
    }
}

export default ProcessingPdf;