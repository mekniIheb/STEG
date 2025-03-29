import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficationUniteeComponent } from './verfication-unitee.component';

describe('VerficationUniteeComponent', () => {
  let component: VerficationUniteeComponent;
  let fixture: ComponentFixture<VerficationUniteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerficationUniteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerficationUniteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
