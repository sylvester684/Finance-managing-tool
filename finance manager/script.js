function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Update these values with your desired username and password
    var correctUsername = "vineet";
    var correctPassword = "bihani";

    // Simple validation (you should perform more secure validation in a real application)
    if (username === correctUsername && password === correctPassword) {
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
