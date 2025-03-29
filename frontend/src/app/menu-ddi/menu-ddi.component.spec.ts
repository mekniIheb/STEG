import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDDiComponent } from './menu-ddi.component';

describe('MenuDDiComponent', () => {
  let component: MenuDDiComponent;
  let fixture: ComponentFixture<MenuDDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDDiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
