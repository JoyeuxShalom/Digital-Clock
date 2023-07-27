function myDigitalClock() {
    function updateTime() {
      var date = new Date();
      var hours = date.getHours(); // 0 - 23
      var minutes = date.getMinutes(); // 0 - 59
      var seconds = date.getSeconds(); // 0 - 59
      var zone = "AM";
  
      // Convert to 12-hour format
      if (hours >= 12) {
        zone = "PM";
        hours = hours % 12;
      }
      if (hours === 0) {
        hours = 12; // 12 midnight
      }
  
      // Add leading zeros to minutes and seconds if necessary
      minutes = formatTime(minutes);
      seconds = formatTime(seconds);
  
      // Display the time in the HTML element with id "clock"
      document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds + " " + zone;
    }
  
    function formatTime(time) {
      return time < 10 ? "0" + time : time;
    }
  
    // Update the time every second
    updateTime(); // Call once initially to prevent delay in displaying time
    setInterval(updateTime, 1000);
  }
  
  myDigitalClock();
  
