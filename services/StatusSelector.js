import  { Status } from "../models/Status.js";

export default class StatusSelector {
  static create(currentStatus, index, onChange) {
    const selectDiv = document.createElement("div");
    selectDiv.classList.add("select-input");

    const label = document.createElement("label");
    label.setAttribute("for", `task-status-${index}`);
    label.textContent = "Status:";

    const select = document.createElement("select");
    select.id = `task-status-${index}`;
    Object.values(Status).forEach(s => {
      const opt = document.createElement("option");
      opt.value = s;
      opt.textContent = s.replace("-", " ").replace(/^\w/, c => c.toUpperCase());
      if (s === currentStatus) opt.selected = true;
      select.appendChild(opt);
    });
    select.addEventListener("change", () => onChange(select.value));

    const arrowDiv = document.createElement("div");
    arrowDiv.classList.add("select-arrow");

    selectDiv.appendChild(label);
    selectDiv.appendChild(select);
    selectDiv.appendChild(arrowDiv);
    return selectDiv;
  }
}