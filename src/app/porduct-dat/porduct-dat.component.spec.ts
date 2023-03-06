import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductDatComponent } from './porduct-dat.component';

describe('PorductDatComponent', () => {
  let component: PorductDatComponent;
  let fixture: ComponentFixture<PorductDatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductDatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
