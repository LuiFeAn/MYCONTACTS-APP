import delay from "../../utils/delay";
import ApiError from "../../errors/api-errors";

class HttpClient {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async get(endpoint){

        await delay(500);
        const response = await fetch(`${this.baseUrl}${endpoint}`);

        let body;
        const contentType = response.headers.get('Content-Type');

        if(contentType.includes('application/json')) body = await response.json();

        if(response.ok) return body;

        throw new ApiError(response,body);
    }

    async post(endpoint,body){

        const headers = new Headers({
            'Content-Type': 'application/json'
        });

        const response = await fetch(`${this.baseUrl}${endpoint}`,{
            method:'POST',
            body: JSON.stringify(body),
            headers,
        });

        let responseBody;
        const contentType = response.headers.get('Content-Type');

        if(contentType.includes('application/json')) responseBody = await response.json();

        if(response.ok) return body;

        throw new ApiError(response,responseBody);


    }

}

export default HttpClient;
