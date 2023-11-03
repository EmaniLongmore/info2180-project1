/* Add your JavaScript to this file */
var initializeSubscriptionForm = function() {
    var emailInput = document.getElementById("email");
    var submitButton = document.querySelector(".btn[type='submit']");
    var messageContainer = document.querySelector(".message");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();

        var emailAddress = emailInput.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailAddress === "") {
            messageContainer.textContent = "Please enter a valid email address.";
            messageContainer.style.color = "red";
        } else if (!emailRegex.test(emailAddress)) {
            messageContainer.textContent = "Invalid email format. Please enter a valid email address.";
            messageContainer.style.color = "red";
        } else {
            messageContainer.textContent = "Thank you! Your email address " + emailAddress + " has been added to our mailing list!";
            messageContainer.style.color = "green";
        }
    });
};

window.onload = function() {
    initializeSubscriptionForm();
};
