import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTiendasComponent } from './lista-tiendas.component';

describe('ListaTiendasComponent', () => {
  let component: ListaTiendasComponent;
  let fixture: ComponentFixture<ListaTiendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTiendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
