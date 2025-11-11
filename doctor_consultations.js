// Example consultation requests
const requestsData = [
  { name: "Alice Uwimana", date: "2025-11-15", time: "10:00", reason: "Checkup" },
  { name: "John Kagabo", date: "2025-11-16", time: "11:30", reason: "Follow-up" },
  { name: "Marie Mukamana", date: "2025-11-17", time: "09:00", reason: "Consultation" }
];

// Populate table
const requestsTable = document.getElementById('requests');

requestsData.forEach((req, index) => {
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>${req.name}</td>
    <td>${req.date}</td>
    <td>${req.time}</td>
    <td>${req.reason}</td>
    <td>
      <button class="action-btn accept-btn">Accept</button>
      <button class="action-btn reject-btn">Reject</button>
      <button class="action-btn reschedule-btn">Reschedule</button>
    </td>
  `;

  requestsTable.appendChild(tr);

  // Button actions
  const [acceptBtn, rejectBtn, rescheduleBtn] = tr.querySelectorAll('button');

  acceptBtn.addEventListener('click', () => {
    alert(`Consultation with ${req.name} accepted! (Email notification sent)`);
    tr.remove();
  });

  rejectBtn.addEventListener('click', () => {
    alert(`Consultation with ${req.name} rejected! (Email notification sent)`);
    tr.remove();
  });

  rescheduleBtn.addEventListener('click', () => {
    const newDate = prompt("Enter new date (YYYY-MM-DD):", req.date);
    const newTime = prompt("Enter new time (HH:MM):", req.time);
    if (newDate && newTime) {
      req.date = newDate;
      req.time = newTime;
      tr.children[1].innerText = newDate;
      tr.children[2].innerText = newTime;
      alert(`Consultation rescheduled for ${req.name}! (Email notification sent)`);
    }
  });
});
