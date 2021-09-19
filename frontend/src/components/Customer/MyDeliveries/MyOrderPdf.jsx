import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { reactLocalStorage } from 'reactjs-localstorage';
import { Backspace } from 'react-bootstrap-icons';
import { APP_ROUTES } from '../../../utilities/constants/routes.constants';
import Header from "../Homepage/Header/Header";
import Footer from '../Homepage/Footer/Footer';

export default function MyOrderPdf() {
    var getPdf = reactLocalStorage.getObject('getPdf');
    const id = getPdf[0];
    const name = getPdf[1];
    const address1 = getPdf[2];
    const address2 = getPdf[3];
    const address3 = getPdf[4];
    const phoneNumber = getPdf[5];
    const statuss = getPdf[6]
    const date = getPdf[7];
    const updatedAt = getPdf[8];

    function printDocument() {
        const input = document.getElementById('pdfdiv');
        html2canvas(input)
            .then((canvas) => {
                var imgWidth = 200;
                var pageHeight = 150;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4')
                var position = 5;
                var heightLeft = imgHeight;
                pdf.addImage(imgData, 'JPEG', 5, position, imgWidth, imgHeight);
                pdf.save("My_Order_Id_" + id + ".pdf");
            });
    }

    return (
        <div>
            <Header />
            <div id="pdfdiv" style={{ maxWidth: '100%', background: '#ffffff', marginBottom: "30px", minHeight: '1000px' }}>
                <div className="card-body" style={{ maxWidth: '60%', margin: 'auto', padding: '10px', background: '#ffffff', marginTop: '90px', marginBottom: '30px', borderColor: 'black', border: 'double', minHeight: '1100px' }}>
                    <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', position: 'relative', marginBottom: '-80px', marginTop: '20px' }}>
                        <h4 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '250%' }}>BOOK LAB ORDER</h4>
                    </div>
                    <div className="row">
                        <div>
                            <div className="d-flex p-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', position: 'relative', marginBottom: '-50px', marginTop: '20px' }}>
                                <h4 tag='div' className='display-1 pb-3 mb-3 border-bottom' style={{ fontWeight: "bold", fontSize: '180%' }}>Order ID : {id}</h4>
                            </div>
                            <div className="col-md-14 col-sm-12" style={{ maxWidth: '80rem', margin: 'auto', padding: '10px' }}>
                                <div className="card col-10" style={{ padding: '10px', margin: 'auto', width: '50%' }}>
                                    <div className="card-body" style={{ alignContent: 'center', paddingLeft: '30px' }}>
                                        <p className="card-text"></p>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-12 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Receiving Person : </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{name}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-12 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Receiving Persons Address : </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{address1}, {address2}, {address3}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-12 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Phone Number : </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{phoneNumber}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-12 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Order Statuss : </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{statuss}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-12 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Ordered Date : </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{date}</p>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputSubject" className="col-md-12 col-form-label col-form-label-md" style={{ fontSize: "130%", fontWeight: "bold" }}>Statuss Updated Date : </label>
                                            <div className="col-sm-12" style={{ paddingTop: '1px' }}>
                                                <p className="card-text">{updatedAt}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                <button type="button" className="btn btn-outline-danger" style={{ float: 'center', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", marginLeft: '20%' }} onClick={() => { window.location.href = APP_ROUTES.USER_MY_DELIVERIES }}><Backspace /> Cancel</button>
                <button type="submit" className="btn btn-outline-success" style={{ float: 'center', padding: '12px 68px', marginBottom: '30px', fontWeight: 'bold', fontSize: "130%", marginRight: "20%" }} onClick={printDocument}> Download PDF</button>
            </div>
            <Footer />
        </div>
    )
}