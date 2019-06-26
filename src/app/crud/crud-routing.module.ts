import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeIdComponent } from './typeid/typeid.component';

const routes: Routes = [
  {
    path: 'typeid',
    component: TypeIdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
