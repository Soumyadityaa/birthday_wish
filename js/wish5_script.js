document.addEventListener("DOMContentLoaded", function () {
    const message = document.querySelector(".message h1");

    // Add a click event listener to the message
    message.addEventListener("click", () => {
        bounceMessage();
    });

    // Function to make the message bounce
    function bounceMessage() {
        message.style.animation = "bounce 0.5s ease";
        setTimeout(() => {
            message.style.animation = ""; // Reset animation
        }, 500);
    }
});
