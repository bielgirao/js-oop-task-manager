import StatusSelector from "./StatusSelector.js";

export default class TaskListRenderer {
  static render(
      tasks,
      containerElement,
      onEdit,
      onRemove,
      onStatusChange,
    ){
    if (!tasks || !containerElement) {
      throw new Error("Invalid task list or container element");
    }

    containerElement.innerHTML = "";

    if(tasks.length === 0){
      const noTasksMessage = document.createElement("p");
      noTasksMessage.textContent = "No tasks to show.";
      containerElement.appendChild(noTasksMessage);
      return
    }

    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      const taskItem = document.createElement("div");
      taskItem.classList.add("task-item-container");

      const taskInfo = document.createElement("div");
      taskInfo.classList.add("task-info");

      const taskTitle = document.createElement("h3");
      taskTitle.innerHTML = `${task.title} <span>(created at ${task.createdAt})</span>`;
      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.description;

      taskInfo.appendChild(taskTitle);
      taskInfo.appendChild(taskDescription);

      const taskActions = document.createElement("div");
      taskActions.classList.add("task-actions");

      const statusDiv = StatusSelector.create(task.status, index, newStatus => {
        onStatusChange(task, newStatus);
      })

      const taskButtons = document.createElement("div");
      taskButtons.classList.add("task-buttons");

      const editBtn = document.createElement("button");
      editBtn.classList.add("secondary-btn");
      editBtn.ariaLabel = "Edit Task";
      editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>  Edit`;
      editBtn.addEventListener("click", () => onEdit(task));

      const removeBtn = document.createElement("button");
      removeBtn.classList.add("secondary-btn", "remove-btn");
      removeBtn.ariaLabel = "Remove Task";
      removeBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
      removeBtn.addEventListener("click", () => onRemove(task));

      taskActions.appendChild(statusDiv);
      taskButtons.appendChild(editBtn);
      taskButtons.appendChild(removeBtn);
      taskActions.appendChild(taskButtons);

      taskItem.appendChild(taskInfo);
      taskItem.appendChild(taskActions);
      li.appendChild(taskItem);

      containerElement.appendChild(li);
    });
  }
}