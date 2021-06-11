import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {AddTask} from '../../actions/task.actions';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.component.html',
  styleUrls: ['./add-new-task.component.scss']
})
export class AddNewTaskComponent implements OnInit {

  newTaskForm: FormGroup = new FormGroup({});

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  get formControls(): { [p: string]: AbstractControl } | undefined {
    return this.newTaskForm?.controls;
  }

  onSubmit(): void {
    if (this.newTaskForm?.invalid) {
      return;
    }

    this.store.dispatch(new AddTask(this.formControls.title.value));

    this.initializeForm();
  }

  private initializeForm(): void {
    this.newTaskForm = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required]})
    });
  }

}
