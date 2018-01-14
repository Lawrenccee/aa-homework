console.log("Hello from the JavaScript console!");

// Your AJAX request here
$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco,us&appid=d0632227904bf24e96151afcb171fb91',
  type: 'GET',
  success(weather) {
    console.log(weather);
  },
  error() {
    console.log("Could not get the data");
  }
});

// Add another console log here, outside your AJAX request
console.log("This line is after the AJAX request");
