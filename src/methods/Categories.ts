import HttpClient from "../HttpClient.js";

class Categories {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(objID: number, catgID?: number, catsID?: number): Promise<any> {
        if (!objID) {
            throw new Error("At least the argument objID must be provided.");
        }

        return this.httpClient.post("cmdb.categories.read", {
            objID,
            catgID: catgID,
            catsID: catsID,
        });
    }
}

export default Categories;