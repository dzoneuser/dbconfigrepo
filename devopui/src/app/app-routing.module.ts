import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from 'src/app/body/body.component';
import { WidgetDetailComponent } from 'src/app/body/widget-detail/widget-detail.component';

const routes: Routes = [
  {path:'widget/:widgetname',component:WidgetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
