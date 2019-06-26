import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/operators';

let datos = [
    {
        id: 1,
        name: 'Cedula',
        status: 1
    }, {
        id: 2,
        name: 'Nit',
        status: 1
    }, {
        id: 3,
        name: 'TI',
        status: 1
    }
];

@Injectable({
    providedIn: 'root'
})
export class CrudService {

    constructor() { }


    public getAllTypeId() {
        return of(datos).pipe(
            delay(1000)
        );
    }

    public saveTypeId(nombre: string) {
        const index = datos.length;
        const id = index + 1;
        return of(id).pipe(
            delay(1000)
        )
    }

    public updateTypeId(data: any){
        return of(true);
    }

    public chengeStatusTypeId(status: number, id: any){
        const model = datos.find(x => x.id == id);
        const index = datos.indexOf(model);
        datos[index].status = status;
        return of(true);
    }

}
