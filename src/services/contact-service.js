import httpClient from "./utils/http-client"

class ContactService {

    constructor(){
        this.httpClient = new httpClient('http://localhost:3001');
    }

    getContacts(orderBy){
        return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
    }

    getContactById(id){
        return this.httpClient.get(`/contacts/${id}`);
    }

    createContact(contact){
        return this.httpClient.post('/contacts',{
            options:contact,
        });
    }

    updateContact(id,contact){
        return this.httpClient.put(`/contacts/${id}`,{
            options:contact
        })
    }

    deleteContact(id){

        return this.httpClient.delete(`/contacts/${id}`);
    }

}

export default new ContactService();
