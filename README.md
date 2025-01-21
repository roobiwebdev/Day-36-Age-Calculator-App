Day 36 of #100DaysChallenge

Project Name: Age Calculator App

This app allows users to input their birth date and instantly calculates their age in years, months, and days. It’s clean, simple, and effective. Additionally, it features error states to handle invalid inputs gracefully and animations when displaying age calculations.

Technologies Used
#HTML

#CSS

#JavaScript


HTML Structure The HTML file sets up the basic structure with inputs for day, month, and year. Semantic elements like <div>, <input>, and <button> are used for form handling.

CSS Styling

Font Import: Used Google Fonts to import the "Poppins" font for a stylish and modern look.

Global Styles: Resets default padding and margin, sets box-sizing, and specifies the font-family for consistency.

Layout: Utilizes Flexbox to center the container and align items. The design includes a clean background, dimensions, padding, border-radius, and box-shadow for an appealing look.

Responsive Design: Media queries ensure the layout adapts beautifully to different screen sizes.

JavaScript Functionality

Input Validation: Adds event listeners to validate day, month, and year inputs.

Error Handling: Displays error messages if inputs are invalid.

Age Calculation: Calculates and displays the user's age in years, months, and days.

Adjusts for cases where days or months are negative:




if(ageDays < 0){
    ageMonths--;
    ageDays += 30;
}
if(ageMonths < 0){
    ageYears--;
    ageMonths += 12;
}

Animation: Animates the values when they are displayed, making the user experience more engaging:
animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

-Enjoyed every moment coding this!😎

-Completed 35 out of 100 Challenges so far—keeping up the momentum!🔥



##Live Demo

[Live Link](https://roobiwebdev.github.io/Day-36-Age-Calculator-App/)






###Screenshot


![desktop-design](https://github.com/user-attachments/assets/54b4909d-5ab1-4c26-8029-86d6cb201307)











-👨‍💻Join me on my coding journey as I tackle advanced challenges and add innovative touches to every project.

-Feedback is always welcome—would love to hear what you think—drop your thoughts, guys! 

Let’s grow together! 🌱
