// DOM Elements
const loginButton = document.getElementById("loginButton");

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

const loginModal = document.getElementById("modal-login");


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
});

// Attach click events to open modals
loginButton.addEventListener("click", () => {
  openModal(loginModal);
});

// Show the modal when the "Profile Info" button is clicked
document.getElementById('profileInfo').addEventListener('click', function() {
  document.getElementById('modal-profile').style.display = 'block';
});

// Close the modal when the close button is clicked
document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('modal-profile').style.display = 'none';
});