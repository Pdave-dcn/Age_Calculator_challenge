export function renderError(input, message) {
  const errorElement = input.nextElementSibling;
  const errorLabel = input.previousElementSibling;

  errorElement.innerHTML = message;
  input.classList.add("js-error-input");
  errorLabel.classList.add("js-error-label");
}

export function removeError(input) {
  const errorElement = input.nextElementSibling;
  const errorLabel = input.previousElementSibling;

  errorElement.innerHTML = "";
  input.classList.remove("js-error-input");
  errorLabel.classList.remove("js-error-label");
}

export let inputValid = true;
export let valueValid = true;

export function verifyInputs() {
  inputValid = true;
  const inputs = document.querySelectorAll("input");

  inputs.forEach((input) => {
    if (input.value === "" || input.value === null) {
      renderError(input, "This field is required");
      inputValid = false;
    } else {
      removeError(input);
    }
  });
  return inputValid;
}

export function verifyValues() {
  valueValid = true;

  const day = document.getElementById("day");
  const month = document.getElementById("month");
  const year = document.getElementById("year");

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const daysInMonthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const leapYear = (year) => {
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const getDaysInMonth = (month, year) => {
    if (month === 2 && leapYear(year)) {
      return 29;
    }
    return daysInMonthArray[month - 1];
  };

  if (inputValid) {
    const monthNumber = Number(month.value);
    if (monthNumber !== "" && (monthNumber > 12 || monthNumber < 1)) {
      renderError(month, "Must be a valid month");
      valueValid = false;
    } else {
      removeError(month);
    }

    const yearNumber = Number(year.value);
    if (yearNumber !== "" && yearNumber > currentYear) {
      renderError(year, "Must be in the past");
      valueValid = false;
    } else {
      removeError(year);
    }

    const dayNumber = Number(day.value);
    if (month.value !== "" && day.value !== "") {
      const numberOfDays = getDaysInMonth(monthNumber, yearNumber);

      if (dayNumber < 1 || dayNumber > numberOfDays) {
        renderError(day, "Must be a valid day in this month");
        valueValid = false;
      } else {
        removeError(day);
      }
    }
  }
  return valueValid;
}

export function CalculateAndRender() {
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value - 1;
  const yearInput = document.getElementById("year").value;

  const today = new Date();

  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currenYear = today.getFullYear();

  let ageYears = currenYear - yearInput;
  let ageMonths = currentMonth - monthInput;
  let ageDays = currentDay - dayInput;

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(currenYear, currentMonth, 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  let yearCounter = 0;
  let monthCounter = 0;
  let dayCounter = 0;

  const interval = setInterval(() => {
    if (yearCounter < ageYears) {
      yearCounter++;
      document.querySelector(".js-age-years").innerHTML = `${yearCounter}`;
    } else if (monthCounter < ageMonths) {
      monthCounter++;
      document.querySelector(".js-age-months").innerHTML = `${monthCounter}`;
    } else if (dayCounter < ageDays) {
      dayCounter++;
      document.querySelector(".js-age-days").innerHTML = `${dayCounter}`;
    } else {
      clearInterval(interval);
    }
  }, 60);
}
