import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pipe } from 'rxjs';
import { PiechartComponent } from './piechart/piechart.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'pie' , component:PiechartComponent},
  {path:'' , component:NavigationComponent},
  {path:'admin' , component:AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
