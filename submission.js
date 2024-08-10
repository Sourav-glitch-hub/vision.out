// scripts.js
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    // You can integrate with a backend service here
});
