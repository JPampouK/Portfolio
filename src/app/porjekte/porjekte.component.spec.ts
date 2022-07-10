import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjekteComponent } from './porjekte.component';

describe('PorjekteComponent', () => {
  let component: PorjekteComponent;
  let fixture: ComponentFixture<PorjekteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorjekteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjekteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
