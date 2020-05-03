import { SubscribeModel } from '../domain/models/subscribe.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockSubscribeApi implements InMemoryDbService{
    createDb(){
        const subscriptions: SubscribeModel[]= [
            { id: 0, name: 'Egyaa', email: 'tpee935@gmail.com', subscriptionType: 'Gold' }
        ]
        return {subscriptions};
    }
}