import HttpClient from "../HttpClient.js";

class Addons {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async readAnalysisDataQuality(profileID: number): Promise<any> {
        if (!profileID) {
            throw new Error("The argument profileid must be provided.");
        }

        return this.httpClient.post("analysis.dataquality.read", {
            profileId: profileID
        });
    }

    async readDocuments(docID: number, objID: number): Promise<any> {
        if (!docID && !objID) {
            throw new Error("The arguments docID and objID must be provided.");
        }

        return this.httpClient.post("document.documents.read", {
            docID: docID,
            objID: objID
        });
    }

    async deleteDocuments(docID: number): Promise<any> {
        if (!docID) {
            throw new Error("The argument docID must be provided.");
        }

        return this.httpClient.post("document.documents.read", {
            docID: docID
        });
    }
}

export default Addons;