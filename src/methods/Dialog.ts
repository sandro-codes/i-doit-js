import HttpClient from "../HttpClient.js";

class Dialog {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(category: string, property: string): Promise<any> {
        if (!category && !property) {
            throw new Error("The arguments category and property must be provided.");
        }

        return this.httpClient.post("cmdb.dialog.read", {
            category: category,
            property: property
        });
    }

    async create(category: string, property: string, value: string): Promise<any> {
        if (!category && !property && !value) {
            throw new Error("The arguments category, property and value must be provided.");
        }

        return this.httpClient.post("cmdb.dialog.create", {
            category: category,
            property: property,
            value: value
        });
    }

    async update(category: string, property: string, value: string, entry_id: number): Promise<any> {
        if (!category && !property && !value && !entry_id) {
            throw new Error("The arguments category, property, value and entry_id must be provided.");
        }

        return this.httpClient.post("cmdb.dialog.update", {
            category: category,
            property: property,
            value: value,
            entry_id: entry_id
        });
    }

    async delete(category: string, property: string, entry_id: number): Promise<any> {
        if (!category && !property && !entry_id) {
            throw new Error("The arguments category, property and entry_id must be provided.");
        }

        return this.httpClient.post("cmdb.dialog.delete", {
            category: category,
            property: property,
            entry_id: entry_id
        });
    }
}

export default Dialog;