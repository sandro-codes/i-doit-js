import HttpClient from "../HttpClient.js";

class Condition {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(conditions: Record<string, any>): Promise<any> {
        if (!conditions) {
            throw new Error("At least one argument must be provided.");
        }

        return this.httpClient.post("cmdb.condition.read", {
            conditions: conditions
        });
    }
}

export default Condition;