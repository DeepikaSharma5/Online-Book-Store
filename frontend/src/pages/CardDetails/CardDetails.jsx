import React,{useState,useEffect} from 'react'
import {Grid,Card,CardContent,TextField} from "@material-ui/core"
import { getCardDetailsById } from '../../services/getCardDetailsById'
import Header from '../../components/Customer/Homepage/Header/Header'


const CardDetails = () => {

    const [name,setName] = useState("");
    const [card_number,setcardNumber] = useState(0);
    const [expiry_date,setExpiryDate] = useState("");
    const[id,setId] = useState("611e6c4e615edb22980d2660");

    const getCardDetails = async () => {
		const res = await getCardDetailsById(id);
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
                    <p style={{borderStyle:'solid',borderWidth:"2px"}}>{name}</p>
                    <p>Card Number</p>
                    <p style={{borderStyle:'solid',borderWidth:"2px"}}>{card_number}</p>
                    <p>Expiry Date</p>
                    <p style={{borderStyle:'solid',borderWidth:"2px"}}>{expiry_date}</p>
                        
                   
                </CardContent>
            </Card>
                </Grid>
                <Grid item sm={5}></Grid>
            </Grid>
           




        </div>
    )
}

export default CardDetails;
