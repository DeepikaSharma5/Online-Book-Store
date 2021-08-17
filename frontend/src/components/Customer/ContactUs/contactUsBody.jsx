import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class ContactUsBody extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            sent: false
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit(e) {
        e.preventDefault();
        let Contact = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        axios.post('http://localhost:6060/contactdata', Contact)
            .then(() => {
                Swal.fire({
                    title: "Success!",
                    text: "Your message is sent. We will contact you soon",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"
                }).then(okay => {
                    if (okay) {
                        window.location.href = "/contact-us";
                    }
                });
            }).catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: "Unable to send message",
                    icon: 'error',
                    confirmButtonText: "OK",
                    type: "success"
                })
            })
    }

    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: "",
            sent: false
        })
    };


    render() { 
        return ( 
            <div className="col-md-14 col-sm-12" style={{ maxWidth: '100rem', margin: 'auto', padding: '10px'}}>
                <div style={{ height: '300px' }}>
                    <div className="card-deck">
                        <div className="col">
                            <div className="card h-100 border border-dark mb-3" style={{ borderRadius: '33px'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Address</h5>
                                    <p className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'20px' }}>SLIIT, New Kandy Road, Malabe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border border-dark mb-3" style={{ borderRadius: '33px'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Phone Number</h5>
                                    <p className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'20px'  }}>+94 11 7544806</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 border border-dark mb-3" style={{ borderRadius: '33px'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Email</h5>
                                    <p className="card-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize:'20px'  }}>info@sliit.lk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col" style={{ borderRadius: '33px',height:'690px'}}>
                        <h5 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', fontSize:'250%' }}>Contact Us for More Details</h5>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group row ">
                                <label htmlFor="inputName" class="col-sm-2 col-form-label col-form-label-lg" style={{fontSize:"120%", fontWeight:"bold"}}>Name: <label style={{color:'red'}}>*</label></label>
                                <div className="col-sm-10">
                                    <input type="text" id="name" className="form-control form-control-lg" name="name" value={this.state.name} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label htmlFor="inputEmail" class="col-sm-2 col-form-label col-form-label-lg" style={{fontSize:"120%",fontWeight:"bold"}}>Email:<label style={{color:'red'}}>*</label></label>
                                <div className="col-sm-10">
                                    <input data-testid="email-input" type="email" id="email" className="form-control form-control-lg" name="email" value={this.state.email} onChange={this.onChange} required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label htmlFor="inputSubject" class="col-sm-2 col-form-label col-form-label-lg" style={{fontSize:"120%",fontWeight:"bold"}}>Subject: </label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control form-control-lg" id="subject" name="subject" value={this.state.subject} onChange={this.onChange} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label htmlFor="inputSubject" class="col-sm-2 col-form-label col-form-label-lg" style={{fontSize:"120%",fontWeight:"bold"}}>Message:<label style={{color:'red'}}>*</label></label>
                                <div className="col-sm-10">
                                    <textarea className="form-control form-control-lg" id="message" rows="4" name="message" value={this.state.message} onChange={this.onChange} required />
                                </div>
                            </div>
                                <center><button type="submit" className="btn btn-primary btn-block mb-4 btn-lg" style={{width:"30%", height:"60px"}}>Send</button></center>    
                        </form>
                    </div>
                    <div className="col" >
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117158014!2d79.9729445!3d6.9146775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1622003456353!5m2!1sen!2slk"
                            style={{ minWidth: "900px", height: "690px" }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }} />
                </div>
            </div>
        );
    }
}
 
export default ContactUsBody;