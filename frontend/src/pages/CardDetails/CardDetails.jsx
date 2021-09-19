import React,{useState,useEffect} from 'react'
import {Grid,Card,CardContent,Button} from "@material-ui/core"
import { getCardDetailsById } from '../../services/getCardDetailsById'
import Header from '../../components/Customer/Homepage/Header/Header'
import jwt_decode from "jwt-decode";


const CardDetails = () => {

    const [name,setName] = useState("");
    const [card_number,setcardNumber] = useState(0);
    const [expiry_date,setExpiryDate] = useState("");
    const[id,setId] = useState("611e6c4e615edb22980d2660");

    const getCardDetails = async () => {

        const userToken = localStorage.getItem("user-token");
        const decodedToken = jwt_decode(userToken, { complete: true });
        console.log(`username is ${decodedToken.name}`);
		const res = await getCardDetailsById(decodedToken.name);
        console.log(res);
		if (res) {
			console.log(`name is ${res.name}`);
            console.log(`number is ${res.card_number}`);
			console.log(`date is ${res.expiry_date}`);

            setName(res.name);
            setcardNumber(res.card_number);
            setExpiryDate(res.expiry_date);


			
		}
		
      
	};

    useEffect(() => {
        getCardDetails();
    }, []);

    return (
        <div>

            <Header/>
            <Grid container>
                <Grid item sm={1}></Grid>
                <Grid item sm={6} style={{paddingTop:"100px"}}>
                <Card >
                <CardContent>
                  
                    <p>Card Holder Name</p>
                    <p style={{borderStyle:'solid',borderWidth:"2px"}}>{name||'no name details added'}</p>
                    <p>Card Number</p>
                    <p style={{borderStyle:'solid',borderWidth:"2px"}}>{card_number || 'no card number addedd'}</p>
                    <p>Expiry Date</p>
                    <p style={{borderStyle:'solid',borderWidth:"2px"}}>{expiry_date|| 'no expiry date addedd'}</p>
                        
                   
                </CardContent>
            </Card>
            <div style={{paddingTop:'30px'}}>
            <Button style={{backgroundColor:"teal",color:'white'}}>Edit Details</Button>
            </div>
                
                </Grid>
                <Grid item sm={5}></Grid>
            </Grid>
           




        </div>
    )
}

export default CardDetails;
