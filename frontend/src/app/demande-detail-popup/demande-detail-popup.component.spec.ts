import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDetailPopupComponent } from './demande-detail-popup.component';

describe('DemandeDetailPopupComponent', () => {
  let component: DemandeDetailPopupComponent;
  let fixture: ComponentFixture<DemandeDetailPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeDetailPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDetailPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
