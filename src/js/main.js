document.addEventListener('DOMContentLoaded', () => {
    const giftButton = document.querySelector('.gift-button');
    
    if (giftButton) {
        console.log("Gift button found!"); // Debugging

        giftButton.addEventListener('click', () => {
            console.log("Button clicked! Navigating...");
            window.location.href = 'pages/timeline.html';
        });
    } else {
        console.error("Gift button not found!");
    }
});
