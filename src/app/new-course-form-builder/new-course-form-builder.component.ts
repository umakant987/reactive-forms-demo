import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form-builder',
  templateUrl: './new-course-form-builder.component.html',
  styleUrls: ['./new-course-form-builder.component.scss']
})
export class NewCourseFormBuilderComponent {

/*   form = new FormGroup({
    name : new FormControl('', Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone : new FormControl()
    }),
    topics : new FormArray([])
  }); */

  form;

  constructor(fb : FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        name: []
      }),
      topics: fb.array([])
    })
  }

}
