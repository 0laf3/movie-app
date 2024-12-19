// DOM Elements
const loginButton = document.getElementById("loginButton");
const signupButton = document.getElementById("signupButton");
const logoutButton = document.getElementById("logoutButton");
const favoritesButton = document.getElementById("favoritesButton");

const loginModal = document.getElementById("modal-login");
const signupModal = document.getElementById("modal-signup");

// Utility function to open a modal
function openModal(modal) {
  modal.style.display = "block";
}

// Utility function to close a modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Close modals when clicking outside
window.addEventListener("click", (event) => {
  if (event.target === loginModal) {
    closeModal(loginModal);
  }
  if (event.target === signupModal) {
    closeModal(signupModal);
  }
});

// Attach click events to open modals
loginButton.addEventListener("click", () => {
  openModal(loginModal);
});

signupButton.addEventListener("click", () => {
  openModal(signupModal);
});

// Close button functionality for modals
document.querySelectorAll(".modal .modal-content").forEach((content) => {
  const closeButton = document.createElement("span");
  closeButton.textContent = "X";
  closeButton.style.cssText =
    "position:absolute;top:10px;right:10px;cursor:pointer;font-weight:bold;";
  content.appendChild(closeButton);

  closeButton.addEventListener("click", () => {
    if (content.parentElement.id === "modal-login") {
      closeModal(loginModal);
    } else if (content.parentElement.id === "modal-signup") {
      closeModal(signupModal);
    }
  });
});
