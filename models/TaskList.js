import ValidationService from "../services/ValidationService.js";
import { Status } from "./Status.js";

export default class TaskList {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(newTask) {
    if(!ValidationService.isTaskInstance(newTask)) {
      throw new Error('Invalid task');
    }
    this.tasks.push(newTask);
  }

  removeTask(taskId) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    this.tasks.splice(taskIndex, 1);
  }

  updateTask(updatedTask) {
    if(!ValidationService.isTaskInstance(updatedTask)) {
      throw new Error('Invalid task');
    }
    const taskIndex = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (taskIndex === -1) {
      throw new Error('Task not found');
    }
    this.tasks[taskIndex] = updatedTask;
  }

  filterTasksByStatus(status) {
    if (!ValidationService.isValidStatus(status, Status)) {
      throw new Error('Invalid status');
    }
    return this.tasks.filter(task => task.status === status);
  }
}