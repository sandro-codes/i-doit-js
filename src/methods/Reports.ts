import HttpClient from "../HttpClient.js";

class Reports {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id?: string, limit?: number, offset?: number): Promise<any> {
        return this.httpClient.post("cmdb.reports", {
            id: id,
            limit: limit,
            offset: offset
        });
    }
}

export default Reports;