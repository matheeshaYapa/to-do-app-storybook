import {TaskComponent} from '../components/task/task.component';
import {moduleMetadata, Meta, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {action} from '@storybook/addon-actions';
import {SharedModule} from '../../shared/shared.module';
import {TasksMainScreenComponent} from '../components/tasks-main-screen/tasks-main-screen.component';
import {NgxsModule, Store} from '@ngxs/store';
import {TaskState} from '../states/task.state';
import {TasksModule} from '../tasks.module';

export default {
  component: TasksMainScreenComponent,
  decorators: [
    moduleMetadata({
      declarations: [TasksMainScreenComponent],
      imports: [CommonModule, NgxsModule.forFeature([TaskState])],
      providers: [Store]
    })
  ],
  excludeStories: /.*Data$/,
  title: 'TaskMainScreen'
} as Meta;

const Template: Story<TasksMainScreenComponent> = args => ({
  props: args
});

export const Default = Template.bind({});
