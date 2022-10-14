import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { LogComponent } from './log/log.component';
import { ScannComponent } from './scann/scann.component';

const routes: Routes = [
  {path:'login', component:LogComponent},
  {path:'scann', component:ScannComponent},
  {path:'data', component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
