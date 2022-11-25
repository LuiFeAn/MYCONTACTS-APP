import httpClient from "./utils/http-client"

class ContactService {

    constructor(){
        this.httpClient = new httpClient('http://localhost:3001');
    }

    getContacts(orderBy){
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }

    createContact(contact){
        return this.httpClient.post('/contacts',contact);
    }

}

export default new ContactService();
