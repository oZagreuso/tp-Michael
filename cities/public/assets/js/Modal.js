class Modal {
  constructor() {
      this.modal = document.querySelector(".modal");
      this.trigger = document.querySelector(".open");
      this.closeButton = document.querySelector(".close-button");

      this.toggleModal = this.toggleModal.bind(this);
      this.windowOnClick = this.windowOnClick.bind(this);

      this.trigger.addEventListener("click", this.toggleModal);
      this.closeButton.addEventListener("click", this.toggleModal);
      window.addEventListener("click", this.windowOnClick);
  }

  toggleModal() {
      this.modal.classList.toggle("show-modal");
  }

  windowOnClick(event) {
      if (event.target === this.modal) {
          this.toggleModal();
      }
  }
}

export { Modal };
