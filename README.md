# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Age Calculator App

This Age Calculator app allows users to input their birth date (day, month, year) and calculates their age in years, months, and days. The application also includes input validation to ensure that the data entered is correct and complete.

## Features

- **Input Fields**: Users can enter their birth date using three input fields for day, month, and year.
- **Real-time Validation**: Input validation checks for empty fields and validates date formats.
- **Age Calculation**: Calculates the user's age based on the current date and displays it in years, months, and days.
- **Error Handling**: Displays error messages for invalid inputs.

## Technologies Used

- HTML5
- CSS3
- SCSS
- JavaScript (ES6 Modules)
- Flexbox for layout

## Structure

### HTML

The HTML structure consists of:

- A main container (`<main>`) that holds the calculator.
- Input fields for day, month, and year.
- A button (styled as an SVG) to trigger the age calculation.
- A section to display the calculated age.

### JavaScript Functions

- **`verifyInputs()`**: Checks if all input fields are filled and displays error messages for empty fields.
- **`verifyValues()`**: Validates the entered date values, ensuring they are within acceptable ranges.
- **`CalculateAndRender()`**: Calculates the age based on the input values and updates the display.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter your birth date in the provided fields (DD, MM, YYYY).
3. Click on the arrow button to calculate your age.
4. The age will be displayed in years, months, and days.

## Error Messages

- If any field is left empty, an error message will indicate that the field is required.
- If an invalid month (not between 1 and 12) is entered, an appropriate error message will be shown.
- If a future year is entered, an error will indicate that the year must be in the past.
- If the day is invalid for the given month, an error message will be displayed.

## Installation

1. Clone the repository or download the ZIP file.
2. Open the `index.html` file in your preferred web browser.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Acknowledgments

- This project is a solution to a challenge from [Frontend Mentor](https://www.frontendmentor.io).
- Coded by [Pdave-dcn](#).
