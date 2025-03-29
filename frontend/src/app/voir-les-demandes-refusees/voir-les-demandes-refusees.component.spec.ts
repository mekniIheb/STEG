import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLesDemandesRefuseesComponent } from './voir-les-demandes-refusees.component';

describe('VoirLesDemandesRefuseesComponent', () => {
  let component: VoirLesDemandesRefuseesComponent;
  let fixture: ComponentFixture<VoirLesDemandesRefuseesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirLesDemandesRefuseesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLesDemandesRefuseesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
