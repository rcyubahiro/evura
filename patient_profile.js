// Toggle Edit / Save
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

// Edit Profile Photo (example)
const editPhotoBtn = document.getElementById('edit-photo');
editPhotoBtn.addEventListener('click', () => {
  alert('Function to change profile photo can be added here.');
});
// =======================
// 📅 Available Slots Section
// =======================  
const availableSlotsList = document.getElementById("availableSlotsList");
const savedSlots = JSON.parse(localStorage.getItem("evura_slots")) || [];
function renderSlots() {
    if (!availableSlotsList) return;
    availableSlotsList.innerHTML = "";
    if (savedSlots.length === 0) {
        availableSlotsList.innerHTML = "<p>No available doctor slots at the moment.</p>";
        return;
    }
}   
renderSlots();  
savedSlots.forEach((slot, index) => {
    const li = document.createElement("li");
    li.textContent = `${slot.day}: ${slot.start} - ${slot.end}`;
    availableSlotsList.appendChild(li);
});
