const baseUrl = "http://localhost:6060/book";

export async function getBooks() {
    const response = await fetch(baseUrl+"/view");
    if(response.ok){
        return response.json()
    }else{
        return response.status(500).send({ error: "Error loading list" })
    }
    throw response;
}