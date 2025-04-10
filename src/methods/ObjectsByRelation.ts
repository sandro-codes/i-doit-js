import HttpClient from "../HttpClient.js";
import {RecordStatusType, RelationType} from "../Constants.js";

class ObjectsByRelation {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id: number, relation_type?: string | number | RelationType, status?: string | RecordStatusType, raw?: boolean): Promise<any> {
        if (!id) {
            throw new Error("The argument id must be provided.");
        }

        return this.httpClient.post("cmdb.objects_by_relation", {
            id: id,
            relation_type: typeof relation_type === "object" ? relation_type.CONSTANT : relation_type,
            status: status,
            raw: raw,
        });
    }
}

export default ObjectsByRelation;