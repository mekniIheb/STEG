import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusUniteeComponent } from './menus-unitee.component';

describe('MenusUniteeComponent', () => {
  let component: MenusUniteeComponent;
  let fixture: ComponentFixture<MenusUniteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusUniteeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusUniteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

