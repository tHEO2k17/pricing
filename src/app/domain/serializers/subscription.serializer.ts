import { SubscriptionResponseModel } from '../models/subscriptions.model';

export class SubscriptionSerializer {
    fromJson(json: any): SubscriptionResponseModel {
      const subscription = new SubscriptionResponseModel();
      subscription.id = json.id;
      subscription.status = json.name;
      subscription.message = json.message;
      subscription.data = json.data;
      return subscription;
    }
  
    toJson(subscription: SubscriptionResponseModel): any {
      return {
        id: subscription.id,
        status: subscription.status,
        message: subscription.message,
        data: subscription.data
      };
    }
  }


  //moment(json.cookedOn, 'mm-dd-yyyy hh:mm');