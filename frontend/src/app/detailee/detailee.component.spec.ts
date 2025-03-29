import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileeComponent } from './detailee.component';

describe('DetaileeComponent', () => {
  let component: DetaileeComponent;
  let fixture: ComponentFixture<DetaileeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaileeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
