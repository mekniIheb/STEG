import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIntComponent } from './login-int.component';

describe('LoginIntComponent', () => {
  let component: LoginIntComponent;
  let fixture: ComponentFixture<LoginIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginIntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
