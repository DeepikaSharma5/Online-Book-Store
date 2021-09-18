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
            return("ok");
        }
        
        
    }catch(error){
        let responseTxt = await error.text();
        return responseTxt;
    }
}

export async function getUserByID(id) {
    const response = await fetch(baseUrl+"/"+id);
    console.log("Fetching details of "+id);
    if(response.ok){
        return response.json()
    }else{
        return response.status(500).send({ error: "Error loading message" })
    }
    throw response;
}

export async function updateUser(userDetails){
    try{
        const response = await fetch(baseUrl+"/",{
            method: "PUT",
    
            // Adding body or contents to send
            body: JSON.stringify(userDetails),
            
            // Adding headers to the request
            headers: {
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

export async function updatePassword(userDetails){
    try{
        const response = await fetch(baseUrl+"/",{
            method: "PATCH",
    
            // Adding body or contents to send
            body: JSON.stringify(userDetails),
            
            // Adding headers to the request
            headers: {
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

export async function deleteUserAccount(id, password) {
    console.log("Body", JSON.stringify(password))
    try{
        const response = await fetch(baseUrl+"/"+id,{
            method: "DELETE",

            body: JSON.stringify(password),

            headers: {
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
export function logout(){
    localStorage.removeItem("user-token");
    window.location.href = "/homepage";
}
