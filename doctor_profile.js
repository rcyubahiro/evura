// Edit / Save Profile
const editBtn = document.getElementById('edit-profile');
const saveBtn = document.getElementById('save-changes');

editBtn.addEventListener('click', () => {
  const spans = document.querySelectorAll('.profile-info span');
  spans.forEach(span => {
    const input = document.createElement('input');
    input.value = span.innerText;
    input.classList.add('edit-input');
    span.replaceWith(input);
  });
  editBtn.style.display = 'none';
  saveBtn.style.display = 'inline-block';
});

saveBtn.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.profile-info input');
  inputs.forEach(input => {
    const span = document.createElement('span');
    span.innerText = input.value;
    input.replaceWith(span);
  });
  saveBtn.style.display = 'none';
  editBtn.style.display = 'inline-block';
});

// Edit Profile Photo
const editPhotoBtn = document.getElementById('edit-photo');
editPhotoBtn.addEventListener('click', () => {
  alert("Function to change profile photo can be added here.");
});

// Change Password
const changePwdBtn = document.getElementById('change-password');
changePwdBtn.addEventListener('click', () => {
  const newPwd = prompt("Enter new password:");
  if (newPwd) {
    alert("Password changed successfully!");
  }
});
