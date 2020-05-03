import { BaseModel } from './base.model';

export interface Serializer {
    fromJson(json: any): BaseModel;
    toJson(base: BaseModel): any;
  }