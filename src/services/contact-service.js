import httpClient from "./utils/http-client";

import contactMapper from './mappers/contact-mapper';

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

        contact = contactMapper.toPersistance(contact);

        return this.httpClient.post('/contacts',{
            body: contact
        });
    }

    updateContact(id,contact){

        contact = contactMapper.toPersistance(contact);

        return this.httpClient.put(`/contacts/${id}`,{
            body: contact
        })
    }

    deleteContact(id){

        return this.httpClient.delete(`/contacts/${id}`);
    }

}

export default new ContactService();
