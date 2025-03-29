import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDDIComponent } from './archive-ddi.component';

describe('ArchiveDDIComponent', () => {
  let component: ArchiveDDIComponent;
  let fixture: ComponentFixture<ArchiveDDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveDDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveDDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
