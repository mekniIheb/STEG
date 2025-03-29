import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAcceptComponent } from './detail-accept.component';

describe('DetailAcceptComponent', () => {
  let component: DetailAcceptComponent;
  let fixture: ComponentFixture<DetailAcceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAcceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
