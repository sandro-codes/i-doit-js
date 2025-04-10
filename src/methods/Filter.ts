import HttpClient from "../HttpClient.js";

class Filter {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(key: string): Promise<any> {
        if (!key) {
            throw new Error("The argument key must be provided.");
        }

        return this.httpClient.post("cmdb.filter.read", {
            key: key,
        });
    }
}

export default Filter;