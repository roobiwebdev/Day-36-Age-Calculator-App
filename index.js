const calculate = document.querySelector(".calculate");
const errorTxt = document.querySelectorAll(".error");
const inputs = document.querySelectorAll("input");
const dayInput = document.querySelector(".day-in");
const monthInput = document.querySelector(".month-in");
const yearInput = document.querySelector(".year-in");
const labels = document.querySelectorAll("h4");
const yearDisplay = document.querySelector(".year-display");
const monthDisplay = document.querySelector(".month-display");
const dayDisplay = document.querySelector(".day-display");

 
calculate.addEventListener("click",(e)=>{
    e.preventDefault();

    errorTxt.forEach(txt=>txt.style.display = "none");
    inputs.forEach(input=>input.style.border = "1px solid #acacac");
    labels.forEach(label=>label.style.color = "#000");

    const isValid = validateInputs();

    if(isValid){
        const age = calculateAge();

        animateValue(yearDisplay, 0, age.years, 600);
        animateValue(monthDisplay, 0, age.months, 600);
        animateValue(dayDisplay, 0, age.days, 600);
    }


});


displayError = (index, message) => {
    errorTxt[index].style.display = "block";
    errorTxt[index].textContent = message;
    inputs[index].style.border = "1px solid hsl(0, 100%, 67%)";
    labels[index].style.color = "hsl(0, 100%, 67%)";
}

validateInputs = () => {
    let isValid = true;

    isNumber = (value) =>{
        return /^\d+$/.test(value);
    }


    if(!isNumber(dayInput.value) || dayInput.value < 1 || dayInput.value > 31){
        displayError(0, "Must be a valid day");
        isValid = false;
    }

    if(!isNumber(monthInput.value) || monthInput.value < 1  || monthInput.value > 12){
        displayError(1, "Must be a valid month");
        isValid = false;
    }

    if(!isNumber(yearInput.value) || yearInput.value < 1500 || yearInput.value > new Date().getFullYear()){
        displayError(2, "Must be a valid year");
        isValid = false;
    }

    return isValid
}

calculateAge = () =>{
    const currentDate = new Date();
    const birthDate = new Date(yearInput.value, monthInput.value -1, dayInput.value);

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays =currentDate.getDate() - birthDate.getDate();

    if(ageDays < 0){
        ageMonths--;
        ageDays += 30;
    }

    if(ageMonths < 0){
        ageYears--;
        ageMonths += 12;
    }

    return {years: ageYears, months: ageMonths, days: ageDays}
}

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
}
