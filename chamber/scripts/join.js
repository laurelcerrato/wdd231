const modals = [
  { modal: "#nonProfit-modal", open: "#NP-open" },
  { modal: "#bronze-modal", open: "#B-open" },
  { modal: "#silver-modal", open: "#S-open" },
  { modal: "#gold-modal", open: "#G-open" },
];

modals.forEach(({ modal, open }) => {
  const dialog = document.querySelector(modal);
  const openBtn = document.querySelector(open);
  const closeBtn = dialog.querySelector(".closeModal");

  openBtn.addEventListener("click", () => dialog.showModal());
  closeBtn.addEventListener("click", () => dialog.close());
});