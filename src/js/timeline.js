document.addEventListener('DOMContentLoaded', () => {
    const ageButtonsContainer = document.querySelector('.age-buttons');
    const memoryImage = document.getElementById('memory-image');
    const ageTitle = document.getElementById('age-title');
    const memoryStory = document.getElementById('memory-story');

    // Generate age buttons from 1 to 17
    for (let age = 1; age <= 17; age++) {
        const button = document.createElement('button');
        button.className = 'age-button hover-effect';
        button.textContent = age;
        button.addEventListener('click', () => showMemory(age));
        ageButtonsContainer.appendChild(button);
    }

    function showMemory(age) {
        const memories = {
            1: {
                image: '../assets/images/age1.jpg',
                story: 'Your first year on earth! Such a cute baby with bright eyes and a beautiful smile. 👶'
            },
            2: {
                image: '../assets/images/age2 - Copy.jpg',
                story: 'Learning to walk and explore the world around you. Your curiosity was already showing! 🚶‍♀️'
            },
            3: {
                image: '../assets/images/age3 - Copy.jpg',
                story: 'Starting to talk more and share your thoughts. Your personality was starting to shine! ⭐'
            },
            4: {
                image: '../assets/images/age4 - Copy.jpg',
                story: 'Pre-school adventures begin! Making your first friends and learning new things. 📚'
            },
            5: {
                image: '../assets/images/age5 - Copy.jpg',
                story: 'Kindergarten years - full of creativity and imagination! 🎨'
            },
            6: {
                image: '../assets/images/age6 - Copy.jpg',
                story: 'First grade! Starting your academic journey with enthusiasm. ✏️'
            },
            7: {
                image: '../assets/images/age7 - Copy.jpg',
                story: 'Growing more confident each day. Your smile could light up any room! 😊'
            },
            8: {
                image: '../assets/images/age8 - Copy.jpg',
                story: 'Developing your own unique interests and hobbies. So much energy! 🌟'
            },
            9: {
                image: '../assets/images/age9 - Copy.jpg',
                story: 'Last year of single digits! Getting more independent each day. 🎈'
            },
            10: {
                image: '../assets/images/age10 - Copy.jpg',
                story: 'Double digits! A big milestone in your journey. 🎉'
            },
            11: {
                image: '../assets/images/age11.jpg',
                story: 'Middle school beginnings - new challenges and opportunities! 📖'
            },
            12: {
                image: '../assets/images/age12.jpg',
                story: 'Growing into your own person, with such a kind heart. ❤️'
            },
            13: {
                image: '../assets/images/age13.jpg',
                story: 'Welcome to your teenage years! So many adventures ahead. 🌈'
            },
            14: {
                image: '../assets/images/age14.jpg',
                story: 'High school starts - new chapter, new experiences! 🏫'
            },
            15: {
                image: '../assets/images/age15.jpg',
                story: 'Fifteen and flourishing! Your determination is inspiring. ⭐'
            },
            16: {
                image: '../assets/images/age16.jpg',
                story: 'Sweet sixteen! Growing more beautiful inside and out. 🎂'
            },
            17: {
                image: '../assets/images/age17.jpg',
                story: 'Seventeen! Ready to take on the world with your amazing spirit! 🌟'
            }
        };

        const memory = memories[age] || {
            image: '../assets/images/placeholder.jpg',
            story: 'Memory to be added...'
        };

        ageTitle.textContent = `Age ${age}`;
        memoryStory.textContent = memory.story;
        memoryImage.src = memory.image;
        
        // Add animation classes
        memoryImage.classList.add('page-transition');
        setTimeout(() => memoryImage.classList.remove('page-transition'), 500);
    }
});