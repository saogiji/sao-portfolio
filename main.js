document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("checkbox");
  const topButton = document.getElementById("top-button");

  // --- Auto Theme Based on Time ---
  const currentHour = new Date().getHours();
  // If it is after 7 PM (19:00) or before 6 AM (06:00), default to night mode
  if (currentHour >= 19 || currentHour < 6) {
    document.body.classList.add("night");
    toggleSwitch.checked = true;
  }

  // --- Manual Theme Toggle ---
  toggleSwitch.addEventListener("change", function() {
    if (this.checked) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
  });

  // --- Scroll to Top Button Visibility ---
  window.addEventListener("scroll", () => {
    // Show button when scrolled down 300px
    if (window.scrollY > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  // --- Scroll to Top Action ---
  topButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
