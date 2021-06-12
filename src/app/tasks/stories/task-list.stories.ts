import {moduleMetadata, Meta, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {TaskListComponent} from '../components/task-list/task-list.component';

export default {
  component: TaskListComponent,
  decorators: [
    moduleMetadata({
      declarations: [TaskListComponent],
      imports: [CommonModule]
    })
  ],
  excludeStories: /.*Data$/,
  title: 'TaskList'
} as Meta;

const Template: Story<TaskListComponent> = args => ({
  props: args
});

export const Default = Template.bind({});
