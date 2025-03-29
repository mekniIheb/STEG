import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLesDemandesAccepteesComponent } from './voir-les-demandes-acceptees.component';

describe('VoirLesDemandesAccepteesComponent', () => {
  let component: VoirLesDemandesAccepteesComponent;
  let fixture: ComponentFixture<VoirLesDemandesAccepteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirLesDemandesAccepteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLesDemandesAccepteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
