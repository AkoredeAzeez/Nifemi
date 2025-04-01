document.addEventListener('DOMContentLoaded', () => {
    const letterContainer = document.querySelector('.letter-container');
    
    const message = `Dear Nifemi,

    Hi bestieee!!!! I want you to know that I'm grateful to have you in my life, and I hope our friendship will only continue to grow as we navigate life's ups and downs together.

    Walking down the memory lane, I encountered and re-encountered so many memories we made together. 

    From first being seat mates, and then gist partners-(more of gossip, but then you get the idea😂)-to having each other's backs and then graduating to being best friends that will give the world for each other. It realized just how much we have grown together and how much room we still have left for growth. 
    
    On this day though, I'd not bore you with all these stories, I'd just like to thank you for being the silver lining in my cloud, the sun's ray on my rainy days, and by my side through thick and thin🥹

    On this birthday of yours, I say cheers to your new age and I hope and pray that it shall be your and our best year yet🥂

    Happy Birthday Miloveeeee!!!

    With love,
    Your bestie 🎉`;

    const createLetterSpans = () => {
        // Split by characters while preserving whitespace
        const letters = [...message];
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            if (letter === ' ') {
                // Add a non-breaking space for visible spaces
                span.innerHTML = '&nbsp;';
            } else if (letter === '\n') {
                // Create line breaks
                span.innerHTML = '<br>';
            } else {
                span.textContent = letter;
            }
            span.className = 'letter';
            span.style.animationDelay = `${index * 0.02}s`;
            letterContainer.appendChild(span);
        });
    };

    createLetterSpans();
});