 // dateTimeUpdater.js

 function updateDateTime() {
    var currentDate = new Date();
  
    // Format the date and time as needed
    var formattedDateTime = currentDate.toLocaleDateString('sq-AL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Update the content of the date and time span
    document.getElementById('dateTimeSpan').innerText = formattedDateTime;
}

// Call the function initially to set the current date and time
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

console.log("Script executed");