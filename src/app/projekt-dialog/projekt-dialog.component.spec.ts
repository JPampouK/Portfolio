import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektDialogComponent } from './projekt-dialog.component';

describe('ProjektDialogComponent', () => {
  let component: ProjektDialogComponent;
  let fixture: ComponentFixture<ProjektDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjektDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
