import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGuichetComponent } from './login-guichet.component';

describe('LoginGuichetComponent', () => {
  let component: LoginGuichetComponent;
  let fixture: ComponentFixture<LoginGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGuichetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
