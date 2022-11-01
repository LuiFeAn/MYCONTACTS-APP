import delay from "../../utils/delay";
import apiErrors from "../../errors/api-errors";
import ApiError from "../../errors/api-errors";

class HttpClient {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async get(endpoint){

        await delay(500);
        const resp = await fetch(`${this.baseUrl}${endpoint}`);
        const contentType = resp.headers.get('Content-Type');

        let body;

        if(contentType.includes('application/json')) body = await resp.json();

        if(resp.ok) return body;

        throw new ApiError(resp,body);


    }

}

export default HttpClient;
