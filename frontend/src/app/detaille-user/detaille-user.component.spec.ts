import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleUserComponent } from './detaille-user.component';

describe('DetailleUserComponent', () => {
  let component: DetailleUserComponent;
  let fixture: ComponentFixture<DetailleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
