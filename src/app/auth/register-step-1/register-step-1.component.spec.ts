import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStep1Component } from './register-step-1.component';

describe('RegisterStep1Component', () => {
  let component: RegisterStep1Component;
  let fixture: ComponentFixture<RegisterStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
