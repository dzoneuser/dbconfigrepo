import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from 'src/app/body/body.component';
import { WidgetDetailComponent } from 'src/app/body/widget-detail/widget-detail.component';
import { HomeComponent } from './body/home/home.component';

const routes: Routes = [
  {path:'widget/:widgetname',component:WidgetDetailComponent},
  {path:'',component:BodyComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
