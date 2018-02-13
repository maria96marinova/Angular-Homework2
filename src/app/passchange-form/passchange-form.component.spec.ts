import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasschangeFormComponent } from './passchange-form.component';

describe('PasschangeFormComponent', () => {
  let component: PasschangeFormComponent;
  let fixture: ComponentFixture<PasschangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasschangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasschangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
