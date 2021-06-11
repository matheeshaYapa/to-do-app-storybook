import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskList$: Observable<Array<TaskModel>> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
