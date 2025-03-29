import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEnCoursComponent } from './detail-en-cours.component';

describe('DetailEnCoursComponent', () => {
  let component: DetailEnCoursComponent;
  let fixture: ComponentFixture<DetailEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEnCoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
