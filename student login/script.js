// USERS DATABASE (fake but realistic)
const users = [
  { username: "sam", password: "1234" },
  { username: "admin", password: "admin123" }
];

// LOGIN
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;
  const error = document.getElementById("error");

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", username);

    if (remember) {
      localStorage.setItem("rememberUser", username);
    }

    window.location.href = "dashboard.html";
    return false;
  } else {
    error.textContent = "Invalid username or password";
    return false;
  }
}

// AUTO LOGIN (remember me)
window.onload = function () {
  const remembered = localStorage.getItem("rememberUser");

  if (remembered && window.location.pathname.includes("index.html")) {
    localStorage.setItem("loggedInUser", remembered);
    window.location.href = "dashboard.html";
  }

  // Dashboard protection
  if (window.location.pathname.includes("dashboard.html")) {
    const user = localStorage.getItem("loggedInUser");

    if (!user) {
      window.location.href = "index.html";
    } else {
      document.getElementById("welcome").textContent = "Hello, " + user;
    }
  }
};

// LOGOUT
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}