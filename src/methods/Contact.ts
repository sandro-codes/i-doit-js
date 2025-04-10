import HttpClient from "../HttpClient.js";

class Contact {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(method: string, filter: Record<string, any>): Promise<any> {
        if (!method && !filter) {
            throw new Error("The arguments method and filter must be provided.");
        }

        return this.httpClient.post("cmdb.contact.read", {
            method: method,
            filter: filter
        });
    }
}

export default Contact;