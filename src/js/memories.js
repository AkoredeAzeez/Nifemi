document.addEventListener('DOMContentLoaded', () => {
    const memoryGrid = document.querySelector('.memory-grid');

    const memories = [
        {
            image: '../assets/images/memory1.jpg',
            title: 'Special Memory 1',
            description: 'Two friends lazying about in the sun after a long day at school'
        },
        {
            image: '../assets/images/memory2.jpg',
            title: 'Special Memory 2',
            description: 'Silliest picture of us🥹.Trying to hug me as always😅'
        },
        {
            image: '../assets/images/memory3.jpg',
            title: 'Special Memory 3',
            description: 'When we felt triumphant after an exam practical and decided to take a lot of pictures -on my phone 😂'
        },
        {
            image: '../assets/images/memory4.jpg',
            title: 'Special Memory 4',
            description: 'At ICM, December 2024'
        },
        {
            image: '../assets/images/memory5.jpg',
            title: 'Special Memory 5',
            description: 'Entering a restaurant with a menu that made our jaws drop so we quickly took ugly pictures and left😂'
        },
        {
            image: '../assets/images/memory6.jpg',
            title: 'Special Memory 6',
            description: 'Prom 2K24, one of my favorite moments till date. After planning each other’s outfits, makeovers and overall doing everything together as usual, we were dancing to show that on such a night, nothing is stronger than the bond of friendship and nothing sweeter than having a friend next to you at all times. To many more years of friendship, my sweet!'
        }
    ];

    memories.forEach(memory => {
        const memoryCard = document.createElement('div');
        memoryCard.className = 'memory-item hover-effect';
        
        memoryCard.innerHTML = `
            <img src="${memory.image}" alt="${memory.title}" class="memory-image">
            <div class="memory-overlay">
                <h3>${memory.title}</h3>
                <p>${memory.description}</p>
            </div>
        `;

        memoryGrid.appendChild(memoryCard);
    });
});