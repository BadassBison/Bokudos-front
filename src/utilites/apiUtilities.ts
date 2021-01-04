import { v4 as uuidv4 } from 'uuid';

export class APIUtilities {

  // TODO: Adapt for Web Workers
  // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
  static readonly devUrl = 'http://localhost:8081/';

  static async get<T>(url: string): Promise<T> {
    const response: T = await this.httpRequest<T>('GET', url);
    return response;
  }

  static async post<T>(url: string, request: T): Promise<T> {
    const body = JSON.stringify(request);
    const response: T = await this.httpRequest<T>('POST', url, body);
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
