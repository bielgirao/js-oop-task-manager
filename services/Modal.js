export default class Modal {
  constructor({
                title,
                content,
                closeBtnText = "Close",
                confirmBtnText = "Confirm",
                onConfirm = null
  }) {
    this.title = title;
    this.content = content;
    this.closeBtnText = closeBtnText;
    this.confirmBtnText = confirmBtnText;
    this.onConfirm = onConfirm;
    this.modalOverlay = null;
  }

  generateModal() {
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    modalContent.innerHTML = `
      <h2>${this.title}</h2>
      <div class="modal-body"></div>
      <div class="modal-footer">
        <button id="close-modal-btn" class="secondary-btn">${this.closeBtnText}</button>
        <button id="confirm-modal-btn" class="primary-btn">${this.confirmBtnText}</button>
      </div>
    `;

    const body = modalContent.querySelector(".modal-body");
    if (typeof this.content === "string") body.innerHTML = this.content;
    else body.appendChild(this.content);

    overlay.appendChild(modalContent);
    this.modalOverlay = overlay;
    this.modalContent = modalContent;
  }

  attachEvents() {
    const closeBtn = this.modalOverlay.querySelector("#close-modal-btn");
    const confirmBtn = this.modalOverlay.querySelector("#confirm-modal-btn");

    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.close();
    });

    confirmBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (typeof this.onConfirm === "function") {
        this.onConfirm();
      }
    });

    this.modalOverlay.addEventListener("click", () => this.close());
    this.modalContent.addEventListener("click", (e) => e.stopPropagation());
  }

  render() {
    if (!this.modalOverlay) {
      this.generateModal();
      this.attachEvents();
    }

    document.body.appendChild(this.modalOverlay);
  }

  close() {
    if (this.modalOverlay) {
      document.body.removeChild(this.modalOverlay);
    }
  }
}
