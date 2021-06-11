import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskComponent} from './components/task/task.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {AddNewTaskComponent} from './components/add-new-task/add-new-task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {NgxsModule} from '@ngxs/store';
import {TaskState} from './states/task.state';
import { TasksMainScreenComponent } from './components/tasks-main-screen/tasks-main-screen.component';


@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    AddNewTaskComponent,
    TasksMainScreenComponent
  ],
  exports: [
    AddNewTaskComponent,
    TaskListComponent,
    TasksMainScreenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    NgxsModule.forFeature([TaskState])
  ]
})
export class TasksModule {
}
