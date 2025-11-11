// === Doctor Dashboard Script ===

// Select elements
const addSlotBtn = document.getElementById('add-slot');
const slotDate = document.getElementById('slot-date');
const slotTime = document.getElementById('slot-time');
const slotsList = document.getElementById('slots');

// Add new slot
addSlotBtn.addEventListener('click', () => {
  const date = slotDate.value;
  const time = slotTime.value;

  if (!date || !time) {
    alert("⚠️ Please select both date and time!");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    ${date} at ${time}
    <button class="remove-btn">Remove</button>
  `;
  slotsList.appendChild(li);

  // Reset inputs
  slotDate.value = '';
  slotTime.value = '';

  // Add remove functionality
  li.querySelector('.remove-btn').addEventListener('click', () => {
    li.remove();
  });
});

// Example dashboard counts (will be dynamic later)
document.getElementById('patient-count').innerText = 25;
document.getElementById('consultation-count').innerText = 10;
document.getElementById('pending-count').innerText = 5;

// (Optional) highlight active nav link
const navLinks = document.querySelectorAll('.nav-menu li');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
