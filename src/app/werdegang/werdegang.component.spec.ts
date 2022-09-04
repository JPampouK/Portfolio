import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerdegangComponent } from './werdegang.component';

describe('WerdegangComponent', () => {
  let component: WerdegangComponent;
  let fixture: ComponentFixture<WerdegangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerdegangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerdegangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
