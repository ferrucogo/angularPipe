import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonComponent } from './components/button/button.component';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { OrderByRankingPipe } from './pipes/order-by-ranking.pipe';
import { OrderWithArgsPipe } from './pipes/order-with-args.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonComponent,
    CapitalizeFirstPipe,
    OrderByRankingPipe,
    OrderWithArgsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
