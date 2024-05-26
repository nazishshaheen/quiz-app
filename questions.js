let questionArray = [
    {
        question: "Which is the longest wall in the world?",
        answer: [
            { text: "Berlin Wall", correct: false},
            { text: "Great Wall of China", correct: true},
            { text: "Western Wall", correct: false},
            { text: "Hadrian's Wall", correct: false}
        ]
    },
    {
        question: "Who was the first person to walk on the moon?",
        answer: [
            { text: "Buzz Aldrin", correct: false},
            { text: "Yuri Gagarin", correct: false},
            { text: "Michael Collins", correct: false},
            { text: "Neil Armstrong", correct: true}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answer:[
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "America", correct: false},
            { text: "Africa", correct: false}
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answer:[
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Lion", correct: false}
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answer:[
            { text: "Vatican City", correct: true},
            { text: "Nepal", correct: false},
            { text: "India", correct: false},
            { text: "Africa", correct: false}
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answer:[
            { text: "Sahara", correct: false},
            { text: "Gobi", correct: false},
            { text: "Kalahari", correct: false},
            { text: "Antarctica", correct: true}
        ]
    },
    {
        question: "What is the capital of France?",
        answer: [
            { text: "Berlin", correct: false},
            { text: "Madrid", correct: false},
            { text: "Paris", correct: true},
            { text: "Rome", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false},
            { text: "Mars", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Saturn", correct: false}
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answer: [
            { text: "Charles Dickens", correct: false},
            { text: "William Shakespeare", correct: true},
            { text: "Mark Twain", correct: false},
            { text: "Jane Austen", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: [
            { text: "Atlantic Ocean", correct: false},
            { text: "Indian Ocean", correct: false},
            { text: "Arctic Ocean", correct: false},
            { text: "Pacific Ocean", correct: true}
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
            { text: "Oxygen", correct: true},
            { text: "Gold", correct: false},
            { text: "Silver", correct: false},
            { text: "Iron", correct: false}
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answer: [
            { text: "Abraham Lincoln", correct: false},
            { text: "George Washington", correct: true},
            { text: "Thomas Jefferson", correct: false},
            { text: "John Adams", correct: false}
        ]
    },
    {
        question: "Which is the tallest mountain in the world?",
        answer: [
            { text: "K2", correct: false},
            { text: "Kangchenjunga", correct: false},
            { text: "Mount Everest", correct: true},
            { text: "Makalu", correct: false}
        ]
    },
    {
        question: "Who discovered penicillin?",
        answer: [
            { text: "Marie Curie", correct: false},
            { text: "Alexander Fleming", correct: true},
            { text: "Albert Einstein", correct: false},
            { text: "Isaac Newton", correct: false}
        ]
    },
    {
        question: "What is the longest river in the world?",
        answer: [
            { text: "Amazon River", correct: false},
            { text: "Nile River", correct: true},
            { text: "Yangtze River", correct: false},
            { text: "Mississippi River", correct: false}
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: [
            { text: "China", correct: false},
            { text: "South Korea", correct: false},
            { text: "Japan", correct: true},
            { text: "Thailand", correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: [
            { text: "Au", correct: true},
            { text: "Ag", correct: false},
            { text: "Gd", correct: false},
            { text: "Ga", correct: false}
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: [
            { text: "Vincent van Gogh", correct: false},
            { text: "Leonardo da Vinci", correct: true},
            { text: "Pablo Picasso", correct: false},
            { text: "Claude Monet", correct: false}
        ]
    },
    {
        question: "Which is the largest planet in our solar system?",
        answer: [
            { text: "Earth", correct: false},
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false}
        ]
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        answer: [
            { text: "China", correct: false},
            { text: "Brazil", correct: true},
            { text: "United Kingdom", correct: false},
            { text: "Russia", correct: false}
        ]
    },
    {
        question: "What is the largest mammal in the world?",
        answer: [
            { text: "Elephant", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Giraffe", correct: false},
            { text: "Hippopotamus", correct: false}
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answer: [
            { text: "Isaac Newton", correct: false},
            { text: "Albert Einstein", correct: true},
            { text: "Galileo Galilei", correct: false},
            { text: "Nikola Tesla", correct: false}
        ]
    },
    {
        question: "Which is the smallest bone in the human body?",
        answer: [
            { text: "Femur", correct: false},
            { text: "Stapes", correct: true},
            { text: "Humerus", correct: false},
            { text: "Tibia", correct: false}
        ]
    },
    {
        question: "Which planet is closest to the sun?",
        answer: [
            { text: "Venus", correct: false},
            { text: "Earth", correct: false},
            { text: "Mercury", correct: true},
            { text: "Mars", correct: false}
        ]
    },
    {
        question: "Which country is known for the maple leaf?",
        answer: [
            { text: "United States", correct: false},
            { text: "Canada", correct: true},
            { text: "Australia", correct: false},
            { text: "Germany", correct: false}
        ]
    },
    {
        question: "What is the largest island in the world?",
        answer: [
            { text: "Borneo", correct: false},
            { text: "Greenland", correct: true},
            { text: "New Guinea", correct: false},
            { text: "Madagascar", correct: false}
        ]
    },
    {
        question: "Which is the largest continent in the world?",
        answer: [
            { text: "Africa", correct: false},
            { text: "Asia", correct: true},
            { text: "Europe", correct: false},
            { text: "North America", correct: false}
        ]
    },
    {
        question: "Who is the author of 'Harry Potter' series?",
        answer: [
            { text: "J.R.R. Tolkien", correct: false},
            { text: "J.K. Rowling", correct: true},
            { text: "George R.R. Martin", correct: false},
            { text: "Suzanne Collins", correct: false}
        ]
    },
    {
        question: "What is the currency of Japan?",
        answer: [
            { text: "Yuan", correct: false},
            { text: "Yen", correct: true},
            { text: "Won", correct: false},
            { text: "Ringgit", correct: false}
        ]
    },
    {
        question: "Which organ is known as the 'brain' of a computer?",
        answer: [
            { text: "Monitor", correct: false},
            { text: "CPU", correct: true},
            { text: "Keyboard", correct: false},
            { text: "Mouse", correct: false}
        ]
    },
    {
        question: "What is the tallest building in the world as of 2024?",
        answer: [
            { text: "Shanghai Tower", correct: false},
            { text: "Burj Khalifa", correct: true},
            { text: "Abraj Al-Bait Clock Tower", correct: false},
            { text: "Taipei 101", correct: false}
        ]
    },
    {
        question: "Which planet is known as the Earth's twin?",
        answer: [
            { text: "Mars", correct: false},
            { text: "Venus", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Mercury", correct: false}
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answer: [
            { text: "Tomato", correct: false},
            { text: "Avocado", correct: true},
            { text: "Pepper", correct: false},
            { text: "Lime", correct: false}
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answer: [
            { text: "Sydney", correct: false},
            { text: "Canberra", correct: true},
            { text: "Melbourne", correct: false},
            { text: "Brisbane", correct: false}
        ]
    },
    {
        question: "Which country is known as the Pearl of the Indian Ocean?",
        answer: [
            { text: "India", correct: false},
            { text: "Maldives", correct: false},
            { text: "Sri Lanka", correct: true},
            { text: "Thailand", correct: false}
        ]
    },
    {
        question: "What is the freezing point of water?",
        answer: [
            { text: "0 degrees Celsius", correct: true},
            { text: "32 degrees Celsius", correct: false},
            { text: "100 degrees Celsius", correct: false},
            { text: "50 degrees Celsius", correct: false}
        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answer: [
            { text: "Oxygen", correct: false},
            { text: "Carbon Dioxide", correct: false},
            { text: "Nitrogen", correct: true},
            { text: "Hydrogen", correct: false}
        ]
    },
    {
        question: "Who invented the telephone?",
        answer: [
            { text: "Thomas Edison", correct: false},
            { text: "Alexander Graham Bell", correct: true},
            { text: "Nikola Tesla", correct: false},
            { text: "Guglielmo Marconi", correct: false}
        ]
    },
    {
        question: "Which country is the largest producer of coffee?",
        answer: [
            { text: "Colombia", correct: false},
            { text: "Vietnam", correct: false},
            { text: "Brazil", correct: true},
            { text: "Ethiopia", correct: false}
        ]
    },
    {
        question: "What is the main language spoken in Brazil?",
        answer: [
            { text: "Spanish", correct: false},
            { text: "English", correct: false},
            { text: "Portuguese", correct: true},
            { text: "French", correct: false}
        ]
    },
    {
        question: "Which element has the highest melting point?",
        answer: [
            { text: "Iron", correct: false},
            { text: "Tungsten", correct: true},
            { text: "Gold", correct: false},
            { text: "Silver", correct: false}
        ]
    },
    {
        question: "What is the capital city of Canada?",
        answer: [
            { text: "Toronto", correct: false},
            { text: "Vancouver", correct: false},
            { text: "Ottawa", correct: true},
            { text: "Montreal", correct: false}
        ]
    },
    {
        question: "Which country is the largest by area?",
        answer: [
            { text: "Canada", correct: false},
            { text: "China", correct: false},
            { text: "United States", correct: false},
            { text: "Russia", correct: true}
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize?",
        answer: [
            { text: "Marie Curie", correct: true},
            { text: "Mother Teresa", correct: false},
            { text: "Jane Addams", correct: false},
            { text: "Rosalind Franklin", correct: false}
        ]
    },
    {
        question: "Which is the most spoken language in the world?",
        answer: [
            { text: "Spanish", correct: false},
            { text: "English", correct: false},
            { text: "Mandarin", correct: true},
            { text: "Hindi", correct: false}
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            { text: "Iron", correct: false},
            { text: "Gold", correct: false},
            { text: "Diamond", correct: true},
            { text: "Silver", correct: false}
        ]
    },
    {
        question: "Who was the 16th President of the United States?",
        answer: [
            { text: "Thomas Jefferson", correct: false},
            { text: "Abraham Lincoln", correct: true},
            { text: "Theodore Roosevelt", correct: false},
            { text: "Woodrow Wilson", correct: false}
        ]
    },
    {
        question: "Which is the longest bone in the human body?",
        answer: [
            { text: "Humerus", correct: false},
            { text: "Femur", correct: true},
            { text: "Tibia", correct: false},
            { text: "Fibula", correct: false}
        ]
    },
    {
        question: "Which vitamin is produced when a person is exposed to sunlight?",
        answer: [
            { text: "Vitamin A", correct: false},
            { text: "Vitamin B", correct: false},
            { text: "Vitamin C", correct: false},
            { text: "Vitamin D", correct: true}
        ]
    },
    {
        question: "What is the largest organ in the human body?",
        answer: [
            { text: "Heart", correct: false},
            { text: "Liver", correct: false},
            { text: "Skin", correct: true},
            { text: "Lung", correct: false}
        ]
    }
]


export default questionArray;