import {moduleMetadata, Meta, Story} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import {AddNewTaskComponent} from '../components/add-new-task/add-new-task.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import {Store} from '@ngxs/store';

export default {
  component: AddNewTaskComponent,
  decorators: [
    moduleMetadata({
      declarations: [AddNewTaskComponent],
      imports: [CommonModule, ReactiveFormsModule, SharedModule],
      providers: [Store]
    })
  ],
  title: 'NewTask'
} as Meta;

const Template: Story<AddNewTaskComponent> = args => ({
  props: args
});

export const Default = Template.bind({});
