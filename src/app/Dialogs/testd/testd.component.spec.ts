import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdComponent } from './testd.component';

describe('TestdComponent', () => {
  let component: TestdComponent;
  let fixture: ComponentFixture<TestdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
