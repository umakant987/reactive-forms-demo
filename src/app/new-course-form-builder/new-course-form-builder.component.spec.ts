import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormBuilderComponent } from './new-course-form-builder.component';

describe('NewCourseFormBuilderComponent', () => {
  let component: NewCourseFormBuilderComponent;
  let fixture: ComponentFixture<NewCourseFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
