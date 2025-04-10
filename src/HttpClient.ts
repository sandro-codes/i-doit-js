import axios, {AxiosInstance} from "axios";
import https from "https";

interface HttpClientConfig {
    baseURL: string;
    username: string;
    password: string;
    apiKey: string;
    language: string;
}

class HttpClient {
    private readonly client: AxiosInstance;
    private readonly apiKey: string;
    private readonly language: string;

    constructor({ baseURL, username, password, apiKey, language }: HttpClientConfig) {
        this.apiKey = apiKey;
        this.language = language;

        this.client = axios.create({
            baseURL,
            headers: {
                "Content-Type": "application/json",
                "X-RPC-Auth-Username": username,
                "X-RPC-Auth-Password": password,
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        });
    }

    public setSessionId(sessionId: string): void {
        delete this.client.defaults.headers.common["X-RPC-Auth-Username"];
        delete this.client.defaults.headers.common["X-RPC-Auth-Password"];
        this.client.defaults.headers.common["X-RPC-Auth-Session"] = sessionId;
    }

    public async post<T>(method: string, params: Record<string, any>): Promise<T> {
        const response = await this.client.post("/", {
            jsonrpc: "2.0",
            method,
            params: {
                ...params,
                apikey: this.apiKey,
                language: this.language,
            },
            id: 1,
        });

        if (response.data.error) {
            throw new Error(response.data.error.message);
        }

        if (!response.data.result) {
            throw new Error('Invalid response: Missing result');
        }

        return response.data.result;
    }
}

export default HttpClient;