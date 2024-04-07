document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;

    
    if ((isValidEmail(emailOrPhone) || isValidPhoneNumber(emailOrPhone)) && password) {
        
        console.log("Login successful!");
    
        window.location.href = "https://www.facebook.com/profile.php";
    } else {
        
        alert("Please enter a valid Email or phone number and Password.");
    }
});

function isValidEmail(input) {
    // Regular expression to validate email address
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

function isValidPhoneNumber(input) {
    // Regular expression to validate phone number (example pattern)
    let phoneRegex = /^\d{10}$/;
    return phoneRegex.test(input);
}
