// This file contains the logic for hidden clickable elements that reveal surprises or jokes, adding an interactive layer to the website.

document.addEventListener('DOMContentLoaded', () => {
    const easterEggs = document.querySelectorAll('.easter-egg');

    easterEggs.forEach(egg => {
        egg.addEventListener('click', () => {
            alert('Surprise! 🎉 You found an Easter egg!');
            // Additional logic for each Easter egg can be added here
        });
    });
});