import { changeTaskName, printTaskFull } from './todo-functions.js';

const taskId = 1;
const taskName = 'My task';
const taskPriority = 'high';
const taskDescription = 'Create a CLI task-manager';
const taskStartDate = '2023-09-04';
const taskEndDate = '2023-11-28';
const taskLabel = 'javascript';

let task = {
  id: taskId,
  name: taskName,
  priority: taskPriority,
  description: taskDescription,
  startDate: new Date(taskStartDate),
  endDate: new Date(taskEndDate),
  label: taskLabel,
};

printTaskFull(task);
changeTaskName(task, 'My new task name');
printTaskFull(task);
