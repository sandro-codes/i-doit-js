import HttpClient from "../HttpClient.js";
import {RelationType} from "../Constants.js";

class Impact {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id: number, relation_type: RelationType | string | number): Promise<any> {
        if (!id && !relation_type) {
            throw new Error("The arguments id and relation_type must be provided.");
        }

        return this.httpClient.post("cmdb.impact.read", {
            id: id,
            relation_type: typeof relation_type === "object" ? relation_type.ID : relation_type,
        });
    }
}

export default Impact;