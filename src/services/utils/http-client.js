import delay from "../../utils/delay";
import ApiError from "../../errors/api-errors";

class HttpClient {

    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    get(endpoint,options){
        return this.makeRequest(endpoint,{
            method:'GET',
            headers:options?.headers,
        });
    }

    post(endpoint,body){
        return this.makeRequest(endpoint,{
            method:'POST',
            body,
            headers:body?.headers,
        });
    }

    async makeRequest(endpoint,options){

        await delay(500);

        const headers = new Headers();

        if(options.body) headers.append('Content-Type','application/json');

        if(options.headers) {
            Object.entries(options.headers).forEach(([key,value]) => {
                headers.append(key,value);
            });
        }

        const response = await fetch(`${this.baseUrl}${endpoint}`,{
            method: options.method,
            body:JSON.stringify(options.body),
            headers,
        });

        let responseBody;
        const contentType = response.headers.get('Content-Type');

        if(contentType.includes('application/json')) responseBody = await response.json();

        if(response.ok) return responseBody;

        throw new ApiError(response,responseBody);

    }

}

export default HttpClient;
