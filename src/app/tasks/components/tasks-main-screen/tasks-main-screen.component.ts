import { Component, OnInit } from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {TaskModel} from '../../models/task.model';
import {TaskState} from '../../states/task.state';

@Component({
  selector: 'app-tasks-main-screen',
  templateUrl: './tasks-main-screen.component.html',
  styleUrls: ['./tasks-main-screen.component.scss']
})
export class TasksMainScreenComponent implements OnInit {

  @Select(TaskState.getToDoTasks) toDoTasks$: Observable<Array<TaskModel>> | undefined;
  @Select(TaskState.getCompletedTasks) completedTasks$: Observable<Array<TaskModel>> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
