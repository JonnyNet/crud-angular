import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';
import { AbstractCrudComponent } from '../abstractcrudcomponent';

// const cols = [
//     {
//         prop: 'id',
//         title: 'ID'
//     },
//     {
//         prop: 'name',
//         title: 'Nombre'
//     }
// ];

@Component({
    selector: 'app-typeid',
    templateUrl: './typeid.component.html',
    styleUrls: ['./typeid.component.scss']
})
export class TypeIdComponent extends AbstractCrudComponent {

    constructor(injet: Injector) {
        super(injet);

        this.displayedColumns = ['id', 'name', 'status'];
        this.method = ['getAllTypeId', 'saveTypeId', 'updateTypeId', 'chengeStatusTypeId'];
    }

    protected onInit() {

        this.form = this.buil.group({
            id: [''],
            name: ['', Validators.required],
            status: ['1']
        });
    }

    protected onDestroy() {

    }
}
