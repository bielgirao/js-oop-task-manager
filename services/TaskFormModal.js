import Modal from "./Modal.js";
import ValidationService from "./ValidationService.js";

export default class TaskFormModal {
  constructor(taskList, onSubmitCallback) {
    this.taskList = taskList;
    this.onSubmitCallback = onSubmitCallback;
    this.modal = null;
  }

  createForm(task = null) {
    const form = document.createElement("form");
    form.classList.add("task-form");

    const titleValue = task ? task.title : "";
    const descValue = task ? task.description : "";

    form.innerHTML = `
      <div class="input-group">
        <label for="task-title">Title:</label>
        <input type="text" id="task-title" value="${titleValue}" class="primary-input" required />
      </div>
      <div class="input-group">
        <label for="task-desc">Description</label>
        <textarea id="task-desc" rows="3" class="primary-input" required>${descValue}</textarea>
      </div>
    `;

    return form;
  }

  handleSubmit(task= null) {
    const title = this.modal.content.querySelector("#task-title").value;
    const description = this.modal.content.querySelector("#task-desc").value;

    if (!title || !description) {
      alert("Please fill in all fields.");
      return;
    }

    const data = { title, description };

    if (typeof this.onSubmitCallback === "function") {
      this.onSubmitCallback(data, task);
    }

    this.modal.close();
  }

  show(task = null) {
    if(task && !ValidationService.isTaskInstance(task)) {
      throw new Error("Invalid task");
    }
    const form = this.createForm(task);

    this.modal = new Modal({
      title: task ? "Edit Task" : "Add Task",
      content: form,
      closeBtnText: "Cancel",
      confirmBtnText: task ? "Update" : "Add",
      onConfirm: () => {
        this.handleSubmit(task)
      }
    });

    this.modal.render();
  }
}