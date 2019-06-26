import { Injector, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';

export abstract class AbstractCrudComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    protected buil: FormBuilder;
    protected service: CrudService;

    public displayedColumns: string[];
    public dataSource = new MatTableDataSource<any>();
    protected method = [];

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort: MatSort;

    constructor(injet: Injector) {
        this.buil = injet.get(FormBuilder);
        this.service = injet.get(CrudService);
    }

    ngOnInit(): void {
        if (this.paginator !== undefined)
            this.dataSource.paginator = this.paginator;

        if (this.sort !== undefined)
            this.dataSource.sort = this.sort;

        this.service[this.method[0]]().subscribe((res: any) => {
            this.dataSource.data = res;
        });
        this.onInit();
    }

    protected onSave(data: any): Observable<any> {
        return this.service[this.method[1]](data);
    }

    protected onUpdate(data: any): Observable<any> {
        return this.service[this.method[2]](data);
    }

    protected onChange(status: number, id: any): Observable<any> {
        return this.service[this.method[3]](status, id);
    }

    public onSubmit() {
        if (this.form.valid) {
            const data = this.form.value;
            if (this.condition(data.id)) {
                this.onSave(data).subscribe((res: any) => {
                    const source = this.dataSource.data;
                    data.id = res;
                    source.push(data);
                    this.dataSource.data = source;
                    this.form.reset();
                });
            } else {
                this.onUpdate(data).subscribe((res: any) => {
                    const source = this.dataSource.data;
                    const model = source.find(x => x.id == data.id);
                    const index = source.indexOf(model);
                    source[index] = this.update(data, model);
                    this.dataSource.data = source;
                    this.form.reset();
                });
            }
        }
    }

    protected update(modelForm: any, model: any) {
        Object.keys(modelForm).forEach(item => {
            model[item] = modelForm[item];
        });
        return model;
    }

    public changeStatus(input: any, id: any) {
        const flag = input.checked;
        this.onChange(flag ? 1 : 0, id).subscribe((res: any) => {
            //input.checked = !flag;
            console.log(res);
        });
    }

    public show(model: any) {
        this.form.patchValue(model);
    }

    protected condition(id: any) {
        return id === undefined || id === '' || id === null;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    protected setDataTable(observable: Observable<any>) {
        observable.subscribe((res: any) => {
            this.dataSource.data = res;
        });
    }

    protected abstract onInit();
    protected abstract onDestroy();

    ngOnDestroy(): void {
        this.onDestroy();
    }

}
