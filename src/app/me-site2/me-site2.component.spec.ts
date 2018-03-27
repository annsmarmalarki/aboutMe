import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSite2Component } from './me-site2.component';

describe('MeSite2Component', () => {
  let component: MeSite2Component;
  let fixture: ComponentFixture<MeSite2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeSite2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeSite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
