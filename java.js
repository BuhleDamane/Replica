document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("emailOrPhone").value;
    let password = document.getElementById("password").value;

    
    if ((isValidEmail(emailOrPhone) || isValidPhoneNumber(emailOrPhone)) && isValidPassword(password)) {
        
        console.log("Login successful!");
    
        window.location.href = "https://www.facebook.com/profile.php";
    } else {
        
        alert("Please enter a valid email or phone number and a correct password.");
    }
});

function isValidEmail(input) {
    // Regular expression to validate email address
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
}

function isValidPhoneNumber(input) {
    // Regular expression to validate phone number (example pattern)
    let phoneRegex = /^0[6-8][0-9]{8}$/;
    return phoneRegex.test(input);
}
function isValidPassword(input) {
    return input.length >= 6;
}