import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusGuichetComponent } from './menus-guichet.component';

describe('MenusGuichetComponent', () => {
  let component: MenusGuichetComponent;
  let fixture: ComponentFixture<MenusGuichetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusGuichetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusGuichetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
