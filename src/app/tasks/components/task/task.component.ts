import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from '../../models/task.model';
import {Store} from '@ngxs/store';
import {CompleteTask, RemoveTask} from '../../actions/task.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task?: TaskModel;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

  onCompleteTask(taskId: number | undefined): void {
    if (taskId) {
      this.store.dispatch(new CompleteTask(taskId));
    }
  }

  onDeleteTask(taskId: number | undefined): void {
    if (taskId) {
      this.store.dispatch(new RemoveTask(taskId));
    }
  }

}
