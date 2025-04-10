import HttpClient from "../HttpClient.js";

class Objects {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(categories?: Record<string, any>, filter?: Record<string, any>, limit?: number | string, order_by?: string, sort?: string): Promise<any> {
        return this.httpClient.post("cmdb.objects.read", {
            categories: categories,
            filter: filter,
            limit: limit,
            order_by: order_by,
            sort: sort
        });
    }
}

export default Objects;