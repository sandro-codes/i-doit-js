import HttpClient from "../HttpClient.js";

class Status {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(): Promise<any> {
        return this.httpClient.post("cmdb.status.read", {});
    }

    async save(title: string, constant: string, color: string): Promise<any> {
        if (!title && !constant && !color) {
            throw new Error("The arguments title, constant and color must be provided.");
        }

        return this.httpClient.post("cmdb.status.save", {
            title: title,
            constant: constant,
            color: color
        });
    }

    async delete(id: number): Promise<any> {
        if (!id) {
            throw new Error("The argument id must be provided.");
        }

        return this.httpClient.post("cmdb.status.delete", {
            id: id
        });
    }
}

export default Status;