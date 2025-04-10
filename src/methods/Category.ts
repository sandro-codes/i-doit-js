import {GlobalCategory, SpecificCategory} from "../Constants.js";
import HttpClient from "../HttpClient.js";

class Category {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(objID: number, category: GlobalCategory | SpecificCategory | string, status: number): Promise<any> {
        return this.httpClient.post("cmdb.category.read", {
            objID: objID,
            category: category,
            status: status
        });
    }

    async delete(objID: number, category: GlobalCategory | SpecificCategory | string, cateID: number): Promise<any> {
        return this.httpClient.post("cmdb.category.delete", {
            objID: objID,
            category: category,
            cateID: cateID
        });
    }

    async save(object: number, category: GlobalCategory | SpecificCategory | string, data: Record<string, any>, entry?: number): Promise<any> {
        return this.httpClient.post("cmdb.category.save", {
            object: object,
            category: category,
            data: data,
            entry: entry
        });
    }

    async quickpurge(objID: number, category: GlobalCategory | SpecificCategory | string, cateID: number): Promise<any> {
        return this.httpClient.post("cmdb.category.quickpurge", {
            objID: objID,
            category: category,
            cateID: cateID
        });
    }

    async purge(object: number, category: GlobalCategory | SpecificCategory | string, entry: number): Promise<any> {
        return this.httpClient.post("cmdb.category.purge", {
            object: object,
            category: category,
            entry: entry
        });
    }

    async recycle(object: number, category: GlobalCategory | SpecificCategory | string, entry: number): Promise<any> {
        return this.httpClient.post("cmdb.category.recycle", {
            object: object,
            category: category,
            entry: entry
        });
    }

    async archive(object: number, category: GlobalCategory | SpecificCategory | string, entry: number): Promise<any> {
        return this.httpClient.post("cmdb.category.archive", {
            object: object,
            category: category,
            entry: entry
        });
    }
}

export default Category;