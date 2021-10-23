import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSemanaComponent } from './lista-semana.component';

describe('ListaSemanaComponent', () => {
  let component: ListaSemanaComponent;
  let fixture: ComponentFixture<ListaSemanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSemanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
