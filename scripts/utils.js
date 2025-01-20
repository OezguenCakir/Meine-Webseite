// calc years of work experience
var date1 = new Date("2021-12-15");
var date2 = new Date();
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
var Difference_In_Years = Difference_In_Days / 365.25;
document.getElementById("years_experience").innerHTML = Difference_In_Years.toFixed(1).replace(".", ",") + " Jahre";

// calc years of work experience at axa
function calculateDateDifference(startDate) {
  const currentDate = new Date();
  const start = new Date(startDate);
  let years = currentDate.getFullYear() - start.getFullYear();
  let months = currentDate.getMonth() - start.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }
  return `${years} Jahre ${months} Monate`;
}
const specificDate = "2022-07-01";
document.getElementById("dateDifference").textContent = calculateDateDifference(specificDate); // correct linking of anchor links under consideration of the navbar
document.querySelectorAll(".tab-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href"); // Hide all tab contents
    document.querySelectorAll(".tab-content").forEach((content) => {
      content.style.display = "none";
    });
    // Show the targeted tab content
    document.querySelector(targetId).style.display = "block";
  });
});

// get current year for footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
