const form = document.querySelector(".input-groups");
const screen = document.querySelector(".calculate-screen");
const years = document.querySelector("#years");
const months = document.querySelector("#months");
const days = document.querySelector("#days");

form.addEventListener("submit", (e) => {
  const formData = new FormData(e.target);
  e.preventDefault();

  const day = formData.get("day");
  const month = formData.get("month");
  const year = formData.get("year");

  const birthday = new Date(year, month, day);
  const dateObj = calculateDateDifference(birthday);

  years.innerHTML = dateObj.years;
  months.innerHTML = dateObj.months;
  days.innerHTML = dateObj.days;
});

function calculateDateDifference(date) {
  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  let months = today.getMonth() - date.getMonth();
  let days = today.getDate() - date.getDate();

  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}
