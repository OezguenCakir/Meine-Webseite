const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".progress-bar");

    if (entry.isIntersecting) {
      square.classList.add("progress-animation");
      return;
    }
  });
});

document.querySelectorAll(".progress").forEach((el) => observer.observe(el));
