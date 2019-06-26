import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIdComponent } from './typeid.component';

describe('TypeidComponent', () => {
  let component: TypeIdComponent;
  let fixture: ComponentFixture<TypeIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
