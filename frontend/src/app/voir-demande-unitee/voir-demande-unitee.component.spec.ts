import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirDemandeUniteeComponent } from './voir-demande-unitee.component';

describe('VoirDemandeUniteeComponent', () => {
  let component: VoirDemandeUniteeComponent;
  let fixture: ComponentFixture<VoirDemandeUniteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirDemandeUniteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirDemandeUniteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
