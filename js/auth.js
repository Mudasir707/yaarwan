const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (
      email === "admin@123.com" &&
      password === "Admin@123"
    ) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userName", "Administrator");

      window.location.href = "dashboard.html";
    } else {
      alert("Invalid email or password");
    }
  });
}
