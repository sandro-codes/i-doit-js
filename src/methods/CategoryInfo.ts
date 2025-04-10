import {GlobalCategory, SpecificCategory} from "../Constants.js";
import HttpClient from "../HttpClient.js";

class CategoryInfo {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(catgID?: number, catsID?: number, customID?: number, category?: GlobalCategory | SpecificCategory | string): Promise<any> {
        if (!catgID && !catsID && !customID && !category) {
            throw new Error("At least one argument must be provided.");
        }

        return this.httpClient.post("cmdb.category_info.read", {
            catgID: catgID,
            catsID: catsID,
            customID: customID,
            category: category,
        });
    }
}

export default CategoryInfo;