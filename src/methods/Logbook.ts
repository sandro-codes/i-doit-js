import HttpClient from "../HttpClient.js";
import {LogbookAlertLevelType, LogbookSourceType} from "../Constants.js";

class Logbook {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    async read(id?: number, object_id?: number, catg_logbook_id?: number, since?: string, status?: string): Promise<any> {
        return this.httpClient.post("cmdb.logbook.read", {
            id: id,
            object_id: object_id,
            catg_logbook_id: catg_logbook_id,
            since: since,
            status: status
        });
    }

    async create(object_id: number, object_ids: string | Record<string, any>, message: string, description: string, comment: string, source: string | LogbookSourceType, alert_level: number | string | LogbookAlertLevelType): Promise<any> {
        if (!object_id && !message) {
            throw new Error("The arguments object_id and message must be provided.");
        }

        return this.httpClient.post("cmdb.logbook.create", {
            object_id: object_id,
            object_ids: object_ids,
            message: message,
            description: description,
            comment: comment,
            source: typeof source === "object" ? source.CONSTANT : source,
            alert_level: typeof alert_level === "object" ? alert_level.CONSTANT : alert_level,
        });
    }
}

export default Logbook;