import HttpClient from "../HttpClient.js";

class Console {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async readTenantList(): Promise<any> {
        return this.httpClient.post("console.tenant.list", {});
    }
}

export default Console;