import httpClient from "./utils/http-client"

class ContactService {

    constructor(){
        this.httpClient = new httpClient('http://localhost:3001');
    }

    async getContacts(orderBy){
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }

}

export default new ContactService();
