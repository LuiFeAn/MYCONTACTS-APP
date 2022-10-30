import delay from "../utils/delay";

class ContactService {

    async getContacts(orderBy){

        await delay(500);
        const resp = await fetch(`http://192.168.2.111:3001/contacts?orderBy=${orderBy}`);
        return resp.json();

    }

}

export default new ContactService();
