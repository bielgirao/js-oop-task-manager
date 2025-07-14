import Task from '../models/Task.js';

export default class ValidationService {
  static isValidStatus(status, validStatuses) {
    return Object.values(validStatuses).includes(status);
  }

  static isNonEmptyString(value) {
    return typeof value === 'string' && value.trim().length > 0;
  }

  static isTaskInstance(obj) {
    return obj instanceof Task;
  }
}