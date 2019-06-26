import { NgModule } from '@angular/core';
import { CrudRoutingModule } from './crud-routing.module';
import { TypeIdComponent } from './typeid/typeid.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        TypeIdComponent
    ],
    imports: [
        SharedModule,
        CrudRoutingModule
    ]
})
export class CrudModule { }
