import HttpClient from "../HttpClient.js";

class LocationTree {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id: number): Promise<any> {
        if (!id) {
            throw new Error("The argument id must be provided.");
        }

        return this.httpClient.post("cmdb.location_tree", {
            id: id
        });
    }
}

export default LocationTree;