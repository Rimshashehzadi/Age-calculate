var calculate_btn = document.getElementById("calculate-btn"),
    calculate_age = document.getElementById("calculate_age");

calculate_btn.addEventListener('click', function() {
    var birth_date = document.getElementById("birth_date").value;
    
    if (!birth_date) {
        calculate_age.innerHTML = "Please select your birth date.";
        return;
    }
    
    birth_date = new Date(birth_date);
    var todayDate = new Date();

    // Calculate the difference in years
    var ageYear = todayDate.getFullYear() - birth_date.getFullYear();

    // Calculate the difference in months
    var ageMonth = todayDate.getMonth() - birth_date.getMonth();
    if (ageMonth < 0 || (ageMonth === 0 && todayDate.getDate() < birth_date.getDate())) {
        ageYear--;
        ageMonth = (ageMonth + 12) % 12;
    }

    // Calculate the difference in days
    var ageDay = todayDate.getDate() - birth_date.getDate();
    if (ageDay < 0) {
        // Get the last day of the previous month
        var lastMonth = todayDate.getMonth() - 1;
        if (lastMonth < 0) lastMonth = 11; // Wrap around to December
        var lastMonthDate = new Date(todayDate.getFullYear(), lastMonth + 1, 0);
        ageDay += lastMonthDate.getDate();
        if (ageMonth === 0) {
            ageYear--;
            ageMonth = 11;
        } else {
            ageMonth--;
        }
    }

    calculate_age.innerHTML = "Your Age: " + ageYear + " Years, " + ageMonth + " Months, and " + ageDay + " Days";
});
