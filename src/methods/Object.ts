import HttpClient from "../HttpClient.js";
import {ObjectType, RecordStatusType} from "../Constants.js";

class Object {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id: number): Promise<any> {
        if (!id) {
            throw new Error("The argument id must be provided.");
        }

        return this.httpClient.post("cmdb.object.read", {
            id: id
        });
    }

    async create(type: string | number | ObjectType, title: string, category?: string, categories?: Record<string, any>, purpose?: string, cmdb_status?: string | number, description?: string): Promise<any> {
        if (!type && !title) {
            throw new Error("The arguments type and title must be provided.");
        }

        return this.httpClient.post("cmdb.object.create", {
            type: type,
            title: title,
            category: category,
            categories: categories,
            purpose: purpose,
            cmdb_status: cmdb_status,
            description: description
        });
    }

    async update(id: number, title: string): Promise<any> {
        if (!id && !title) {
            throw new Error("The arguments id and title must be provided.");
        }

        return this.httpClient.post("cmdb.object.update", {
            id: id,
            title: title
        });
    }

    async delete(id: number, status: string | RecordStatusType): Promise<any> {
        if (!id && !status) {
            throw new Error("The arguments id and status must be provided.");
        }

        return this.httpClient.post("cmdb.object.delete", {
            id: id,
            status: status
        });
    }

    async recycle(object: number): Promise<any> {
        if (!object) {
            throw new Error("The argument object must be provided.");
        }

        return this.httpClient.post("cmdb.object.recycle", {
            object: object
        });
    }

    async archive(object: number): Promise<any> {
        if (!object) {
            throw new Error("The argument object must be provided.");
        }

        return this.httpClient.post("cmdb.object.archive", {
            object: object
        });
    }

    async purge(object: number): Promise<any> {
        if (!object) {
            throw new Error("The argument object must be provided.");
        }

        return this.httpClient.post("cmdb.object.purge", {
            object: object
        });
    }

    async markAsTemplate(object: number): Promise<any> {
        if (!object) {
            throw new Error("The argument object must be provided.");
        }

        return this.httpClient.post("cmdb.object.markAsTemplate", {
            object: object
        });
    }

    async markAsMassChangeTemplate(object: number): Promise<any> {
        if (!object) {
            throw new Error("The argument object must be provided.");
        }

        return this.httpClient.post("cmdb.object.markAsMassChangeTemplate", {
            object: object
        });
    }
}

export default Object;