import {TaskComponent} from '../components/task/task.component';
import {moduleMetadata, Meta, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {action} from '@storybook/addon-actions';
import {SharedModule} from '../../shared/shared.module';

export default {
  component: TaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskComponent],
      imports: [CommonModule, SharedModule]
    })
  ],
  excludeStories: /.*Data$/,
  title: 'Task'
} as Meta;

export const actionsData = {
  completeTask: action('onCompleteTask'),
  removeTask: action('onDeleteTask')
};

const Template: Story<TaskComponent> = args => ({
  props: {
    ...args,
    completeTask: actionsData.completeTask,
    removeTask: actionsData.removeTask
  }
});

export const DefaultToDo = Template.bind({});
DefaultToDo.args = {
  task: {
    id: 1,
    title: 'Test Task',
    state: 'TO_DO',
    insertedDate: new Date(),
    endDate: null
  }
};

export const DefaultCompleted = Template.bind({});
DefaultCompleted.args = {
  task: {
    id: 1,
    title: 'Test Task',
    state: 'COMPLETED',
    insertedDate: new Date(),
    endDate: new Date()
  }
};
