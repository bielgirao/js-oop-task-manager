import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

import ValidationService from "../services/ValidationService.js";
import { Status } from "./Status.js";

export default class Task {
  constructor(task) {
    if(!ValidationService.isNonEmptyString(task.title)) {
      throw new Error('Invalid title');
    }
    if(!ValidationService.isNonEmptyString(task.description)) {
      throw new Error('Invalid description');
    }

    this.id = uuidv4();
    this.title = task.title;
    this.description = task.description;
    this.status = Status.pending;
    this.createdAt = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }).format(new Date());
  }

  changeStatus(newStatus) {
    if(!ValidationService.isValidStatus(newStatus, Status)) {
      throw new Error('Invalid status');
    }
    this.status = newStatus;
  }

  editTask(title, description, status = null) {
    if(!ValidationService.isNonEmptyString(title)) {
      throw new Error('Invalid title');
    }
    if(!ValidationService.isNonEmptyString(description)) {
      throw new Error('Invalid description');
    }
    this.title = title;
    this.description = description;
    if(status) {
      this.changeStatus(status);
    }
  }
}