import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './myservice/data.service';
import { WidgetComponent } from './body/widget/widget.component';
import { WidgetDetailComponent } from './body/widget-detail/widget-detail.component';
import { DatastoreService } from 'src/app/myservice/datastore.service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    WidgetComponent,
    WidgetDetailComponent
  ],
  imports: [
    HttpClientModule,
    //HttpModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [DataService,DatastoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
