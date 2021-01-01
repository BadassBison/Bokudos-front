import { v4 as uuidv4 } from 'uuid';

export class APIUtilities {

  // TODO: Adapt for Web Workers
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API

  static readonly stageBuilderApiUrl = 'http://localhost:8081/';
  static readonly stageEndpoint = 'stage/';
  static readonly regionEndpoint = 'region/';
  static readonly searchEndpoint = 'search?';

  // TODO: Move this specific api method someplace more reasonable
  static async getStages() {
    const stages = await this.get(this.stageBuilderApiUrl + this.stageEndpoint);
    console.log('All Stages: ', stages);
    return stages;
  }

  static async getRegions() {
    const regions = await this.get(this.stageBuilderApiUrl + this.regionEndpoint);
    console.log('All Regions: ', regions);
    return regions;
  }

  static async getStage(stageId: number) {
    if (!stageId) { return; }
    const stage = await this.get(this.stageBuilderApiUrl + this.stageEndpoint + stageId);
    console.log(`Stage with id ${stageId}: `, stage);
    return stage;
  }

  static async searchStagesByName(searchTerm: string) {
    if (!searchTerm) { return; }
    const queryString = `${this.searchEndpoint}name=${searchTerm}`;
    const stages = await this.get(this.stageBuilderApiUrl + this.stageEndpoint + queryString);
    console.log(`Stages with name similiar to ${searchTerm}: `, stages);
    return stages;
  }

  static async get<T>(url: string): Promise<T> {
    const response: T = await this.httpRequest<T>('GET', url);
    return response;
  }

  static async post<T, R>(url: string, request: T): Promise<R> {
    const body = JSON.stringify(request);
    const response: R = await this.httpRequest<R>('POST', url, body);
    return response;
  }

  static async put<T, R>(url: string, request: T): Promise<R> {
    const body = JSON.stringify(request);
    const response: R = await this.httpRequest<R>('PUT', url, body);
    return response;
  }

  static async delete(url: string): Promise<void> {
    await this.httpRequest('DELETE', url);
  }

  private static async httpRequest<T>(method: string, url: string, body: string = null): Promise<T> {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    const data = await fetch(url, this.buildRequest(method, body));
    const response: T = await data.json();

    return response;
  }

  private static buildRequest(method: string, body: string): RequestInit {
    const request: RequestInit = {
      method,
      headers: this.buildHeaders(),
      body: this.buildBody(body)
    };

    return request;
  }

  // TODO: Enable Auth with AWS Cognito
  private static buildHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'X-Request-Id': uuidv4(),
      // 'Authorization': `Bearer <API_TOKEN>`
    };

    return headers;
  }

  private static buildBody(json: string): BodyInit {
    const body: BodyInit = json;

    return body;
  }

}
