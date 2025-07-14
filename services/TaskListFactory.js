import TaskList from "../models/TaskList.js";
import Task from "../models/Task.js";

export default class TaskListFactory {
  static generateTaskListData(name = "My Tasks") {
    const taskList = new TaskList(name);

    for(let i = 1; i <= 6; i++) {
      const task = new Task({
        title: `Task ${i}`,
        description: `Description for Task ${i}`
      });
      if(i === 3 || i === 6) {
        task.changeStatus("completed");
      }
      taskList.addTask(task);
    }

    return taskList;
  }
}