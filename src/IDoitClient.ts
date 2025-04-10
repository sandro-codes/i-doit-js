import HttpClient from "./HttpClient.js";
import Constants from "./Constants.js";
import * as Methods from "./methods/Methods.js";

interface ClientConfig {
    url: string;
    username: string;
    password: string;
    apiKey: string;
    language?: string;
}

class IDoitClient {
    public constants: Constants;
    public categories: Methods.Categories;
    public categoryInfo: Methods.CategoryInfo;
    public category: Methods.Category;
    public condition: Methods.Condition;
    public contact: Methods.Contact;
    public dialog: Methods.Dialog;
    public filter: Methods.Filter;
    public impact: Methods.Impact;
    public locationTree: Methods.LocationTree;
    public logbook: Methods.Logbook;
    public objectTypeCategories: Methods.ObjectTypeCategories;
    public objectTypeGroups: Methods.ObjectTypeGroups;
    public objectTypes: Methods.ObjectTypes;
    public object: Methods.Object;
    public objectsByRelation: Methods.ObjectsByRelation;
    public objects: Methods.Objects;
    public reports: Methods.Reports;
    public status: Methods.Status;
    public workstationComponents: Methods.WorkstationComponents;
    public console: Methods.Console;
    public idoit: Methods.IDoit;
    public addons: Methods.Addons;

    private readonly httpClient: HttpClient;

    constructor({ url, username, password, apiKey, language = "en" }: ClientConfig) {
        if (!url || !username || !password || !apiKey) {
            throw new Error("Missing required configuration parameters: url, username, password, or apiKey.");
        }

        this.httpClient = new HttpClient({
            baseURL: url,
            username,
            password,
            apiKey,
            language,
        });

        this.constants = new Constants();
        this.categories = new Methods.Categories(this.httpClient);
        this.categoryInfo = new Methods.CategoryInfo(this.httpClient);
        this.category = new Methods.Category(this.httpClient);
        this.condition = new Methods.Condition(this.httpClient);
        this.contact = new Methods.Contact(this.httpClient);
        this.dialog = new Methods.Dialog(this.httpClient);
        this.filter = new Methods.Filter(this.httpClient);
        this.impact = new Methods.Impact(this.httpClient);
        this.locationTree = new Methods.LocationTree(this.httpClient);
        this.logbook = new Methods.Logbook(this.httpClient);
        this.objectTypeCategories = new Methods.ObjectTypeCategories(this.httpClient);
        this.objectTypeGroups = new Methods.ObjectTypeGroups(this.httpClient);
        this.objectTypes = new Methods.ObjectTypes(this.httpClient);
        this.object = new Methods.Object(this.httpClient);
        this.objectsByRelation = new Methods.ObjectsByRelation(this.httpClient);
        this.objects = new Methods.Objects(this.httpClient);
        this.reports = new Methods.Reports(this.httpClient);
        this.status = new Methods.Status(this.httpClient);
        this.workstationComponents = new Methods.WorkstationComponents(this.httpClient);
        this.console = new Methods.Console(this.httpClient);
        this.idoit = new Methods.IDoit(this.httpClient);
        this.addons = new Methods.Addons(this.httpClient);

        this.autoLogin();
    }

    private async autoLogin(): Promise<void> {
        try {
            const response = await this.idoit.login();
            if(response['session-id']) {
                this.httpClient.setSessionId(response['session-id']);
            } else {
                throw new Error("Automatic session login failed: Got no SessionID.");
            }
        } catch (error) {
            throw error;
        }
    }
}

export default IDoitClient;