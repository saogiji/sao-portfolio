document.addEventListener("DOMContentLoaded", () => {
  const topButton = document.getElementById("top-button");
  const themeSwitch = document.getElementById("switch1");

  // 1. Hide Top Button initially
  if (topButton) topButton.style.display = "none";

  // 2. On Click, smooth scroll to the top of the page
  if (topButton) {
    topButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // 'smooth' makes it look much nicer than an instant jump
    });
  }

  // 3. Show/Hide Top Button based on scroll
  window.addEventListener("scroll", () => {
    const threshold = 208;
    const distanceToBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
    const op = distanceToBottom / threshold;
    
    if (topButton) {
      if (op <= 13) {
        topButton.style.display = "block";
      } else {
        topButton.style.display = "none";
      }
    }
  });

  // 4. Toggle between Day and Night Mode
  if (themeSwitch) {
    themeSwitch.addEventListener("click", () => {
      document.body.classList.toggle("night");
    });
  }

  // 5. Apply dark theme if user visits after 7pm or before 6am
  const currentHour = new Date().getHours();
  if (currentHour > 19 || currentHour < 6) {
    document.body.classList.add("night");
  } else {
    document.body.classList.remove("night");
  }

  // 6. Hover effect on languages/tools (Handled via JS, but CSS is better!)
  const projectTags = document.querySelectorAll(".project_used span");
  projectTags.forEach(tag => {
    tag.addEventListener("mouseover", (event) => {
      event.preventDefault(); // Event is now properly passed
      tag.style.opacity = "0.25";
      tag.style.transition = "opacity 0.3s ease"; // Adds the smooth animation
    });
    tag.addEventListener("mouseout", (event) => {
      event.preventDefault();
      tag.style.opacity = "1";
    });
  });
});
