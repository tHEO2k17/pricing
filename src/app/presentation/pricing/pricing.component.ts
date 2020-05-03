import { Component, OnInit } from '@angular/core';
import { SubscribeModel } from 'src/app/domain/models/subscribe.model';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  subscriptions: SubscribeModel[]=[];
  subscribeData: SubscribeModel;

  constructor(private subscriptionService: SubscriptionService, private toastr: ToastrService) { }

  getSubscriptions(){
    this.subscriptionService.getSubscriptions().subscribe(data =>{
      this.subscriptions=data;
    });
  }

  subscribeUser(param: string){
    this.subscribeData = {
      id: 0,
      name :'Temp',
      email : 't1@gmail.com',
      subscriptionType: this.getSubscriptionType(param)
    }

    this.subscriptionService.subscribeUser(this.subscribeData).subscribe(data =>{
      console.log(this.getSubscriptionType(param));
      // this.subscriptions=data;
    }, (e) => this.toastr.error('An error occurred trying to subscribe new user','Error!'));
  }

  private getSubscriptionType(t: string){
    const subs: { [x: string]: any; } ={
      'BR': 'Bronze',
      'SL': 'Silver',
      'GD': 'Gold'
    }
    return subs[t];
  }

  ngOnInit(): void {
  }

}
