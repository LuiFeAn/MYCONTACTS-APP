class ApiError extends Error {

    constructor(response,body){
        super();
        this.name = 'ApiError';
        this.response = response;
        this.body = body;
        this.message = (
            body?.error || `${response.status} - ${response.statusText}`
        );
    }

}

export default ApiError;
