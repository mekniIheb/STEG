import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveDpteComponent } from './archive-dpte.component';

describe('ArchiveDpteComponent', () => {
  let component: ArchiveDpteComponent;
  let fixture: ComponentFixture<ArchiveDpteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchiveDpteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveDpteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
