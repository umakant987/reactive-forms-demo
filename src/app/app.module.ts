import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseFormBuilderComponent } from './new-course-form-builder/new-course-form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NewCourseFormComponent,
    NewCourseFormBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
