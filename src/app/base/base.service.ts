import { BaseModel } from './base.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serializer } from './serializer';
import {map} from 'rxjs/operators';

export class BaseService<T extends BaseModel> {
    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string,
        private serializer: Serializer) {}
    
      public create(item: T): Observable<T> {
        return this.httpClient
          .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
          .pipe(map(data => this.serializer.fromJson(data) as T));
      }
    
      public update(item: T): Observable<T> {
        return this.httpClient
          .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
            this.serializer.toJson(item))
          .pipe(map(data => this.serializer.fromJson(data) as T));
      }
    
      read(id: number): Observable<T> {
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${id}`)
          .pipe(map((data: any) => this.serializer.fromJson(data) as T));
      }
    
      private convertData(data: any): T[] {
        return data.map(item => this.serializer.fromJson(item));
      }
    }