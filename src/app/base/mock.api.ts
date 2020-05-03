import { InMemoryDbService, RequestInfoUtilities, ParsedRequestUrl } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const subscriptions = [
      { id: 0, type: 'Bronze', benefits: {} },
      { id: 1, type: 'Silver', benefits: {} },
      { id: 2, type: 'Gold', benefits: {} },
    ];
    return { subscriptions };
  }

  get(reqInfo: RequestInfo) {}

  post(reqInfo: RequestInfo) {}

  put(reqInfo: RequestInfo) {}

  //parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {}
}
