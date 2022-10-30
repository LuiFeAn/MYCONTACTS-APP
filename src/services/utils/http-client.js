import delay from "../../utils/delay";

class HttpClient {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async get(endpoint){
        await delay(500);
        const resp = await fetch(`${this.baseUrl}${endpoint}`);
        return resp.json();
    }

}

export default HttpClient;
