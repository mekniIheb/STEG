import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLesDemandesEnCoursComponent } from './voir-les-demandes-en-cours.component';

describe('VoirLesDemandesEnCoursComponent', () => {
  let component: VoirLesDemandesEnCoursComponent;
  let fixture: ComponentFixture<VoirLesDemandesEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirLesDemandesEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLesDemandesEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
