import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/crud/typeid',
    pathMatch: 'full',
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud/crud.module').then(e => e.CrudModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
