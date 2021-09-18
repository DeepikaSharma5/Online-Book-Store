const baseUrl = "http://localhost:6060/admin";

export async function registerAdmin(newUserDetails) {
    
    const userToken = localStorage.getItem("user-token");

    try{
        const response = await fetch(baseUrl+"/new-admin",{
            method: "POST",
    
            // Adding body or contents to send
            body: JSON.stringify(newUserDetails),
            
            // Adding headers to the request
            headers: {
                'auth-token': userToken,
                'Content-Type': 'application/json; charset=UTF-8'
            }
    
        });

        if(!response.ok){
            throw response;
        }else{
            return("ok");
        }
        
        
    }catch(error){
        let responseTxt = await error.text();
        return responseTxt;
    }
}

export async function login(userCreds){
    try{
        const response = await fetch(baseUrl+"/login",{
            method: "POST",
    
            // Adding body or contents to send
            body: JSON.stringify(userCreds),
            
            // Adding headers to the request
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
    
        });

        if(!response.ok){
            throw response;
        }else{
            //Store jwt token
            localStorage.setItem("user-token",response.headers.get('auth-token'));
            return("ok");
        }
        
        
    }catch(error){
        let responseTxt = await error.text();
        return responseTxt;
    }
}

export async function getAdminList() {
    const userToken = localStorage.getItem("user-token");
    const response = await fetch(baseUrl+"/all-admins",{
        method: "GET",
        
        // Adding headers to the request
        headers: {
            'auth-token': userToken,
            'Content-Type': 'application/json; charset=UTF-8',
        }

    });
    if(response.ok){
        return response.json()
    }else{
        return response.status(500).send({ error: "Error loading administrators" })
    }
    throw response;
}

export async function updateAdminStatus(userDetails){

    const userToken = localStorage.getItem("user-token");

    try{
        const response = await fetch(baseUrl+"/",{
            method: "PATCH",
    
            // Adding body or contents to send
            body: JSON.stringify(userDetails),
            
            // Adding headers to the request
            headers: {
                'auth-token': userToken,
                'Content-Type': 'application/json; charset=UTF-8',
            }
    
        });

        if(!response.ok){
            throw response;
        }else{
            return("ok");
        }
        
        
    }catch(error){
        let responseTxt = await error.text();
        return responseTxt;
    }
}
