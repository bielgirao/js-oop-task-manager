import TaskListFactory from "./services/TaskListFactory.js";
import TaskListRenderer from "./services/TaskListRenderer.js";
import TaskFormModal from "./services/TaskFormModal.js";
import Task from "./models/Task.js";

const taskListElement = document.getElementById("task-list");
const taskListTitle = document.getElementById("task-list-title");
const addTaskButton = document.getElementById("add-task-button");
const filterStatusSelect = document.getElementById("filter-status");

const taskList = TaskListFactory.generateTaskListData();
taskListTitle.innerText = taskList.name;

const updateUI = (tasks = taskList.tasks) => {
  TaskListRenderer.render(tasks, taskListElement, onEdit, onRemove, onStatusChange);
};

const taskFormModal = new TaskFormModal(taskList, (data, existingTask) => {
  if (existingTask) {
    existingTask.editTask(data.title, data.description);
    taskList.updateTask(existingTask);
  } else {
    const newTask = new Task(data);
    taskList.addTask(newTask);
  }
  updateUI();
});

addTaskButton.addEventListener("click", () => {
  taskFormModal.show();
})

filterStatusSelect.addEventListener("change", (e) => {
  const selectedStatus = e.target.value;
  if (selectedStatus === "all") {
    updateUI();
  } else {
    const filteredTasks = taskList.filterTasksByStatus(selectedStatus);
    updateUI(filteredTasks);
  }
})

const onEdit = (task) => {
  const taskToEdit = taskList.tasks.find(t => t.id === task.id);
  if (taskToEdit) {
    taskFormModal.show(taskToEdit);
  }
};

const onRemove = (task) => {
  taskList.removeTask(task.id);
  updateUI();
};

const onStatusChange = (task, newStatus) => {
  task.changeStatus(newStatus);
  updateUI();
}

updateUI();