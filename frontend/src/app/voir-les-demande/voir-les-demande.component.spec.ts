import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLesDemandeComponent } from './voir-les-demande.component';

describe('VoirLesDemandeComponent', () => {
  let component: VoirLesDemandeComponent;
  let fixture: ComponentFixture<VoirLesDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirLesDemandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLesDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
