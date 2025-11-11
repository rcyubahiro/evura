// =======================
// 🌟 E-Vura Patient Dashboard JS
// =======================

// Load current patient
const user = JSON.parse(localStorage.getItem("evura_currentUser")) || { name: "Jane Doe" };
document.getElementById("patientName").textContent = user.name;

// Handle logout
document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("evura_currentUser");
  window.location.href = "index.html";
});

// =======================
// 🩺 Doctor Slots Section
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

  savedSlots.forEach((slot, index) => {
    const li = document.createElement("li");
    li.textContent = `${slot.day}: ${slot.start} - ${slot.end}`;

    const bookBtn = document.createElement("button");
    bookBtn.textContent = "Book";
    bookBtn.classList.add("bookBtn");
    bookBtn.addEventListener("click", () => bookAppointment(index));

    li.appendChild(bookBtn);
    availableSlotsList.appendChild(li);
  });
}

function bookAppointment(index) {
  const selectedSlot = savedSlots[index];
  const myAppointments = JSON.parse(localStorage.getItem("evura_appointments")) || [];

  // Prevent double booking
  const alreadyBooked = myAppointments.some(
    (appt) => appt.day === selectedSlot.day && appt.start === selectedSlot.start
  );
  if (alreadyBooked) {
    alert("This slot is already booked.");
    return;
  }

  myAppointments.push({ patient: user.name, ...selectedSlot });
  localStorage.setItem("evura_appointments", JSON.stringify(myAppointments));

  alert(`Appointment booked for ${selectedSlot.day}, ${selectedSlot.start}-${selectedSlot.end}`);
  renderMyAppointments();
}

// =======================
// 📅 My Appointments Section
// =======================
function renderMyAppointments() {
  const myAppointmentsContainer = document.getElementById("myAppointments");
  if (!myAppointmentsContainer) return;

  const allAppointments = JSON.parse(localStorage.getItem("evura_appointments")) || [];
  const myList = allAppointments.filter((appt) => appt.patient === user.name);

  myAppointmentsContainer.innerHTML = "";
  if (myList.length === 0) {
    myAppointmentsContainer.innerHTML = "<p>No appointments booked yet.</p>";
    return;
  }

  myList.forEach((appt) => {
    const li = document.createElement("li");
    li.textContent = `${appt.day}: ${appt.start} - ${appt.end}`;
    myAppointmentsContainer.appendChild(li);
  });
}

// =======================
// 🏥 Medical History Section
// =======================
const medicalHistoryList = document.getElementById("medicalHistoryList");

function loadMedicalHistory() {
  if (!medicalHistoryList) return;

  const history = [
    {
      doctor: "Dr. Jane Doe",
      date: "2025-11-10",
      diagnosis: "Hypertension",
      prescription: "Amlodipine 5mg daily",
      notes: "Monitor blood pressure weekly",
    },
    {
      doctor: "Dr. Patrick N.",
      date: "2025-10-22",
      diagnosis: "Migraine",
      prescription: "Paracetamol 500mg as needed",
      notes: "Avoid caffeine and stress triggers",
    },
  ];

  medicalHistoryList.innerHTML = history
    .map(
      (h) => `
        <li>
          <strong>${h.doctor}</strong> — ${h.date}<br>
          <small>Diagnosis: ${h.diagnosis}</small><br>
          <button class="view-details-btn"
            data-details="Doctor: ${h.doctor}\nDate: ${h.date}\nDiagnosis: ${h.diagnosis}\nPrescription: ${h.prescription}\nNotes: ${h.notes}">
            View Details
          </button>
        </li>
      `
    )
    .join("");
}

// =======================
// 📘 Modal Logic (for medical history)
// =======================
function setupModal() {
  const modal = document.getElementById("detailsModal");
  const closeBtn = document.querySelector(".close-btn");
  const recordDetails = document.getElementById("recordDetails");

  document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      recordDetails.textContent = btn.getAttribute("data-details");
      modal.style.display = "block";
    });
  });

  closeBtn.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}

// =======================
// 🚀 Initialize Dashboard
// =======================
document.addEventListener("DOMContentLoaded", () => {
  renderSlots();
  renderMyAppointments();
  loadMedicalHistory();
  setupModal();
});
