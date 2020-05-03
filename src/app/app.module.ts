import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricingComponent } from './presentation/pricing/pricing.component';
import { environment } from 'src/environments/environment';
import { InMemoryDataService } from './base/mock.api';
import { MockSubscribeApi } from './base/mock.subscribe.api';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PricingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    environment.useMockServer ?
    InMemoryWebApiModule.forRoot(MockSubscribeApi, { delay: 100 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
