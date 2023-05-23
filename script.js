// Function to calculate the time until next birthday and age
function calculateTimeUntilBirthdayAndAge() {
    var birthdate = document.getElementById("date").value;
    var today = new Date();
    var nextBirthday = new Date(birthdate);
  
    // Set the year of next birthday to current year
    nextBirthday.setFullYear(today.getFullYear());
  
    // If the next birthday has already occurred this year, add 1 to the year
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
  
    // Calculate the time difference in milliseconds
    var timeDiff = nextBirthday.getTime() - today.getTime();
  
    // Convert time difference to days, hours, and minutes
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  
    // Calculate the age
    var birthYear = parseInt(birthdate.substr(0, 4));
    var birthMonth = parseInt(birthdate.substr(5, 2));
    var birthDay = parseInt(birthdate.substr(8, 2));
  
    var age = today.getFullYear() - birthYear;
    if (today.getMonth() < birthMonth - 1 || (today.getMonth() == birthMonth - 1 && today.getDate() < birthDay)) {
      age--;
    }
  
    // Display the result
    document.getElementById("result").textContent = "Time until next birthday: " + days + " days, " + hours + " hours, " + minutes + " minutes.";
    document.getElementById("result2").textContent = "Current age: " + age + " years old.";
  }
  
  // Attach the calculateTimeUntilBirthdayAndAge function to the button click event
  document.getElementById("calculate").addEventListener("click", calculateTimeUntilBirthdayAndAge);
  
   
    
   
   
  
  
  
  
  