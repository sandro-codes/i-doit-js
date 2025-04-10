import HttpClient from "../HttpClient.js";

class WorkstationComponents {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id?: number, ids?: number[], email?: string, emails?: string): Promise<any> {
        return this.httpClient.post("cmdb.workstation_components.read", {
            filter: {
                id: id,
                ids: ids,
                email: email,
                emails: emails,
            }
        });
    }
}

export default WorkstationComponents;