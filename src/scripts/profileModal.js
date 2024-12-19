// Show the modal when the "Profile Info" button is clicked
document.getElementById('profileInfo').addEventListener('click', function() {
    document.getElementById('modal-profile').style.display = 'block';
});

// Close the modal when the close button is clicked
document.getElementById('closeModalButton').addEventListener('click', function() {
    document.getElementById('modal-profile').style.display = 'none';
});