import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandesArchiveesComponent } from './demandes-archivees.component'; // Correction du nom du composant

describe('DemandesArchiveesComponent', () => { // Correction du nom du composant
  let component: DemandesArchiveesComponent; // Correction du nom du composant
  let fixture: ComponentFixture<DemandesArchiveesComponent>; // Correction du nom du composant

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesArchiveesComponent ] // Correction du nom du composant
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandesArchiveesComponent); // Correction du nom du composant
    component = fixture.componentInstance; // Correction du nom du composant
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
