import HttpClient from "../HttpClient.js";
import {ObjectType} from "../Constants.js";

class ObjectTypeCategories {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(type: number | string | ObjectType, raw?: boolean): Promise<any> {
        if (!type) {
            throw new Error("The argument type must be provided.");
        }

        return this.httpClient.post("cmdb.object_type_categories", {
            type: type,
            raw: raw
        });
    }
}

export default ObjectTypeCategories;