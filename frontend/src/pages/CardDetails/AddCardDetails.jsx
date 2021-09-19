import React, { useState } from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";
import axiosInstance from "../../services/axiosInstance";
import Header from '../../components/Customer/Homepage/Header/Header';
import Footer from '../../components/Customer/Homepage/Footer/Footer';



export default function AddCardDetails() {
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [expiry_date, setExpiryDate] = useState("");
  const [card_number,setCardNumber] = useState(0);


  const userToken = localStorage.getItem("user-token");
  const decodedToken = jwt_decode(userToken, { complete: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCardDetail = {
      name,
      cvc,
      expiry_date,
      card_number,
      user:decodedToken.name
    };
  

    try {
      const res = await axios.post("http://localhost:6060/card/add", newCardDetail);
      Swal.fire({
        title: "Success!",
        text: "Added Successed!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"
    })
      console.log(res.data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "error!",
        text: "Not Success",
        icon: 'error',
        position: 'center',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });
    }
  };
  return (
    <>
      
      
      <Header/>
        <Grid container >
          
          <Grid item sm={6} >
            <Grid style={{ paddingTop: "100px",paddingLeft:"80px" }} item sm={12}>
              <Card>
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">
                        Card holder Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Card Number
                      </label>
                      <input
                        type="number"
                        name="card_number"
                        className="form-control"
                        onChange={(e) => {
                          setCardNumber(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label" >
                        Expiry Date
                      </label>
                      <input
                        type="date"
                        data-provide="datepicker"
                        name="expiry_date"
                        className="form-control"
                        onChange={(e) => {
                          setExpiryDate(e.target.value);
                        }}
                      />
                    </div>

                    <div className="mb-3">
                      <label for="exampleInputPassword1" className="form-label">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cvc"
                        className="form-control"
                        onChange={(e) => {
                          setCvc(e.target.value);
                        }}
                      />
                    </div>
                  

                    <Button
                      type="submit"
                      size="small"
                      style={{ backgroundColor: "teal", color: "white" }}
                    >
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid item sm={5}></Grid>
         
        </Grid>
      
     
    </>
  );
}
