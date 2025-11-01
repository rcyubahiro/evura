let selectedRole = null;

function showForm(role) {
  selectedRole = role;
  document.getElementById("auth-selection").classList.add("hidden");
  document.getElementById("auth-forms").classList.remove("hidden");
  document.getElementById("form-title").innerText =
    role === "doctor"
      ? "Doctor Login / Sign Up"
      : "Patient Login / Sign Up";
}

function goBack() {
  document.getElementById("auth-forms").classList.add("hidden");
  document.getElementById("auth-selection").classList.remove("hidden");
}

function toggleAuth(type) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginBtn = document.getElementById("login-btn");
  const signupBtn = document.getElementById("signup-btn");

  if (type === "login") {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
  } else {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
  }
}
