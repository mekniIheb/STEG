import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoirDemandeDDIComponent } from './voir-demande-ddi.component';

describe('VoirDemandeDDIComponent', () => {
  let component: VoirDemandeDDIComponent;
  let fixture: ComponentFixture<VoirDemandeDDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirDemandeDDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirDemandeDDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
