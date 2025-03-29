import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtAbonneComponent } from './dt-abonne.component';

describe('DtAbonneComponent', () => {
  let component: DtAbonneComponent;
  let fixture: ComponentFixture<DtAbonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtAbonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
