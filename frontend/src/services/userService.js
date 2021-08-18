const baseUrl = "http://localhost:6060/user";

export async function register(newUserDetails) {
    try{
        const response = await fetch(baseUrl+"/register",{
            method: "POST",
    
            // Adding body or contents to send
            body: JSON.stringify(newUserDetails),
            
            // Adding headers to the request
            headers: {
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
            localStorage.setItem("user-id",response.body);
            return("ok");
        }
        
        
    }catch(error){
        let responseTxt = await error.text();
        return responseTxt;
    }
}
