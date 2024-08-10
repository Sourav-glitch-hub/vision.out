// scripts.js
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = event.target.querySelector('input[type="email"]');
    const successMessage = document.getElementById('subscription-success');

    if (emailInput.value) {
        successMessage.textContent = `Thank you for subscribing, ${emailInput.value}!`;
        successMessage.style.visibility = 'visible';
        successMessage.style.opacity = '1';

        // Optionally, clear the input field
        emailInput.value = '';

        // Optionally, hide the message after a few seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            successMessage.style.visibility = 'hidden';
        }, 3000);

        // Here, you can integrate with the backend to store the subscription
    }
});
// script.js

// Set the date we're counting down to
var countdownDate = new Date("Aug 13, 2024 23:59:59").getTime();

// Update the countdown every 1 second
var countdownFunction = setInterval(function() {
    var now = new Date().getTime();
    var distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Offer Expired!";
    }
}, 1000);
