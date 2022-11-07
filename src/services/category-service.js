import httpClient from './utils/http-client';


class CategorysService {

    constructor(){
        this.httpClient = new httpClient('http://localhost:3001');
    }

    async listCategories(){
        return this.httpClient.get('/categories');
    }

}

export default new CategorysService;
