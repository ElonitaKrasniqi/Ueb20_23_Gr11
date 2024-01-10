function updateDateTime() {
  var currentDate = new Date();

  var formattedDateTime = currentDate.toLocaleDateString("sq-AL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("dateTimeSpan").innerText = formattedDateTime;
}

updateDateTime();

setInterval(updateDateTime, 1000);

console.log("Script executed");
