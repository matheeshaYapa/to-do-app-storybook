import {TaskModel} from '../models/task.model';
import {Action, Selector, State, StateContext} from '@ngxs/store';
import {AddTask, CompleteTask, RemoveTask, SortTasksByCompletedAt, SortTasksByCreatedAt} from '../actions/task.actions';
import {Observable, of} from 'rxjs';

export class TaskStateModel {
  tasks: Array<TaskModel> | undefined;
}

@State<TaskStateModel>({
  name: 'tasks',
  defaults: {
    tasks: []
  }
})
export class TaskState {

  @Selector()
  static getToDoTasks(state: TaskStateModel): Array<TaskModel> {
    return state.tasks?.filter(task => task.state === 'TO_DO');
  }

  @Selector()
  static getCompletedTasks(state: TaskStateModel): Array<TaskModel> {
    return state.tasks?.filter(task => task.state === 'COMPLETED');
  }

  @Action(AddTask)
  addTask({getState, patchState}: StateContext<TaskStateModel>, {payload}: AddTask): void {
    const state = getState();
    patchState({
      tasks: [
        ...state.tasks as Array<TaskModel>,
        {state: 'TO_DO', id: Date.now(), insertedDate: new Date(), title: payload, endDate: null}
      ]
    });
  }

  @Action(RemoveTask)
  removeTask({getState, patchState}: StateContext<TaskStateModel>, {payload}: RemoveTask): void {
    patchState({
      tasks: [
        ...(getState().tasks as Array<TaskModel>).filter(task => task.id !== payload)
      ]
    });
  }

  @Action(CompleteTask)
  completeTask({getState, patchState}: StateContext<TaskStateModel>, {payload}: CompleteTask): void {

    const tasksAfterUpdate = (getState().tasks as Array<TaskModel>).map(task => {
      if (task.id === payload) {
        return Object.assign({}, task, {state: 'COMPLETED', endDate: new Date()});
      }
      return task;
    });

    patchState({
      tasks: [
        ...tasksAfterUpdate
      ]
    });
  }

  @Action(SortTasksByCreatedAt)
  sortTasksByCreatedAt(
    {getState, patchState}: StateContext<TaskStateModel>, {payload}: SortTasksByCreatedAt
  ): Observable<Array<TaskModel>> {


    const completedTasks = getState().tasks?.filter(task => task.state === 'COMPLETED');
    let sortedTasks = new Array<TaskModel>();
    if (completedTasks && payload === 'asc') {
      sortedTasks = completedTasks.sort((a, b) => a.insertedDate.getTime() - b.insertedDate.getTime());
    } else if (completedTasks && payload === 'desc') {
      sortedTasks = completedTasks.sort((a, b) => b.insertedDate.getTime() - a.insertedDate.getTime());
    }

    return of(sortedTasks);

  }

  @Action(SortTasksByCompletedAt)
  sortTasksByCompletedAt(
    {getState, patchState}: StateContext<TaskStateModel>, {payload}: SortTasksByCompletedAt
  ): Array<TaskModel> {


    const completedTasks = getState().tasks?.filter(task => task.state === 'COMPLETED');
    let sortedTasks = new Array<TaskModel>();
    if (completedTasks && payload === 'asc') {
      sortedTasks = completedTasks.sort((a, b) => {
        if (a.endDate && b.endDate) {
          return a.endDate.getTime() - b.endDate.getTime();
        } else {
          return 0;
        }
      });
    } else if (completedTasks && payload === 'desc') {
      sortedTasks = completedTasks.sort((a, b) => {
        if (a.endDate && b.endDate) {
          return b.endDate.getTime() - a.endDate.getTime();
        } else {
          return 0;
        }
      });
    }

    return sortedTasks;

  }
}
