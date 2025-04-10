import HttpClient from "../HttpClient.js";

class IDoit {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async addons(): Promise<any> {
        return this.httpClient.post("idoit.addons", {});
    }

    async constants(): Promise<any> {
        return this.httpClient.post("idoit.constants", {});
    }

    async license(): Promise<any> {
        return this.httpClient.post("idoit.license", {});
    }

    async login(): Promise<any> {
        return this.httpClient.post("idoit.login", {});
    }

    async logout(): Promise<any> {
        return this.httpClient.post("idoit.logout", {});
    }

    async search(q: string): Promise<any> {
        if (!q) {
            throw new Error("The argument q must be provided.");
        }

        return this.httpClient.post("idoit.search", {
            q: q
        });
    }

    async version(): Promise<any> {
        return this.httpClient.post("idoit.version", {});
    }
}

export default IDoit;