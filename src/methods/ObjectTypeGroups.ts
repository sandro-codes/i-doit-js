import HttpClient from "../HttpClient.js";

class ObjectTypeGroups {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(filter?: Record<string, any>, limit?: number | string, sort?: string, order_by?: string, raw?: boolean): Promise<any> {
        return this.httpClient.post("cmdb.object_type_groups", {
            filter: filter,
            limit: limit,
            sort: sort,
            order_by: order_by,
            raw: raw
        });
    }
}

export default ObjectTypeGroups;