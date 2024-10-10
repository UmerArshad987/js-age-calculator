function calculateAge() {
    let day = +prompt("Enter your birth day (1-31):");
    let monthInput = prompt("Enter your birth month (Full name, abbreviation, or number):").toLowerCase();
    let year = +prompt("Enter your birth year:");
  
    let monthMap = {
      "january": 1, "jan": 1, "1": 1, "01": 1,
      "february": 2, "feb": 2, "2": 2, "02": 2,
      "march": 3, "mar": 3, "3": 3, "03": 3,
      "april": 4, "apr": 4, "4": 4, "04": 4,
      "may": 5, "5": 5, "05": 5,
      "june": 6, "jun": 6, "6": 6, "06": 6,
      "july": 7, "jul": 7, "7": 7, "07": 7,
      "august": 8, "aug": 8, "8": 8, "08": 8,
      "september": 9, "sep": 9, "sept": 9, "9": 9, "09": 9,
      "october": 10, "oct": 10, "10": 10,
      "november": 11, "nov": 11, "11": 11,
      "december": 12, "dec": 12, "12": 12
    };
  
    let month = monthMap[monthInput];
    if (!month) {
      alert("Invalid month input. Please enter a valid month.");
      return;
    }
  
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1; 
    let currentDay = today.getDate();
  
    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
      alert(`Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days!`);
  }
  
  calculateAge();
  