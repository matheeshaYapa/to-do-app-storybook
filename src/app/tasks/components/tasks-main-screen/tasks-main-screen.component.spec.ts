import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksMainScreenComponent } from './tasks-main-screen.component';

describe('TasksMainScreenComponent', () => {
  let component: TasksMainScreenComponent;
  let fixture: ComponentFixture<TasksMainScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksMainScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
