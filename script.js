// Challenge Database
const challenges = [
    // Logic Challenges
    {
        id: 1,
        title: "The Light Switch Puzzle",
        category: "logic",
        difficulty: "Easy",
        question: "You are in a dark room with three light switches. Each switch controls one of three light bulbs in the next room. You cannot see the lights from where the switches are. You can flip the switches as many times as you want, but you can only go into the other room once. How can you determine which switch controls which bulb?",
        options: [
            "Turn on switch 1 for a few minutes, then turn it off. Turn on switch 2. Go into the room and check.",
            "Flip each switch in sequence and count to 10 between each flip.",
            "Turn on all three switches and observe carefully.",
            "Use a mirror to see into the other room."
        ],
        correctAnswer: 0,
        explanation: "Turn on switch 1 for a few minutes (the bulb will be hot), turn it off, turn on switch 2, leave switch 3 off. Now: the bulb that's on is controlled by switch 2, the one that's off but hot is switch 1, and the cold one is switch 3."
    },
    {
        id: 2,
        title: "The River Crossing",
        category: "logic",
        difficulty: "Medium",
        question: "A farmer needs to cross a river with a fox, a chicken, and grain. The boat can only hold the farmer plus one other item. The fox can't be left alone with the chicken (it will eat it), and the chicken can't be left alone with the grain (it will eat it). How many trips does it take?",
        options: [
            "3 trips",
            "5 trips",
            "7 trips",
            "It's impossible"
        ],
        correctAnswer: 1,
        explanation: "The farmer takes the chicken across (1), comes back alone (2), takes the fox or grain across (3), brings the chicken back (4), takes the other item across (5), comes back alone (6), takes the chicken across (7). Total: 7 trips!"
    },
    {
        id: 3,
        title: "The Hats Problem",
        category: "logic",
        difficulty: "Hard",
        question: "Three prisoners are told that two will be executed and one will be released. They wear hats that are either red or blue, but can't see their own hat. At least one hat is red. If you can deduce your hat color with certainty, you'll be released. What do you deduce if you see two blue hats?",
        options: [
            "Your hat is red",
            "Your hat is blue",
            "You can't determine your hat color",
            "It depends on other factors"
        ],
        correctAnswer: 0,
        explanation: "If at least one hat is red and you see two blue hats, your hat must be red! This is a logical deduction problem."
    },

    // Math Challenges
    {
        id: 4,
        title: "The Monty Hall Problem",
        category: "math",
        difficulty: "Medium",
        question: "You're on a game show with 3 doors. Behind one is a prize, behind two are goats. You pick door 1. The host opens door 3 showing a goat. Should you switch to door 2?",
        options: [
            "Yes, switching increases your chances to 2/3",
            "No, staying with door 1 is better",
            "It doesn't matter, both are 1/2",
            "No, switching decreases your chances"
        ],
        correctAnswer: 0,
        explanation: "Yes! When you initially pick a door, you have a 1/3 chance of being right. The host then eliminates a wrong door, but your initial 1/3 chance doesn't change. Switching gives you a 2/3 chance of winning!"
    },
    {
        id: 5,
        title: "The Missing Dollar",
        category: "math",
        difficulty: "Easy",
        question: "Three friends pay $30 for a meal (each pays $10). The waiter brings back $5 in change. They each take $1 back, and give $2 to the waiter as a tip. So each paid $9 and $2 went to the tip. That's $27 + $2 = $29. Where's the missing dollar?",
        options: [
            "There is no missing dollar, the math is just presented confusingly",
            "The waiter stole it",
            "It's lost in the transaction",
            "The restaurant took it"
        ],
        correctAnswer: 0,
        explanation: "The trick is in how the problem is presented. The three friends paid $27 total. $25 went to the restaurant and $2 went to the waiter. There's no missing dollar - it's an accounting trick!"
    },
    {
        id: 6,
        title: "The Birthday Problem",
        category: "math",
        difficulty: "Hard",
        question: "In a room of 23 people, what's the probability that at least two share the same birthday?",
        options: [
            "About 10%",
            "About 50%",
            "About 90%",
            "Less than 1%"
        ],
        correctAnswer: 1,
        explanation: "It's about 50.7%! This surprises most people because they think about pairs individually. But with 23 people, you get 253 different possible pairs!"
    },

    // Word Challenges
    {
        id: 7,
        title: "The Anagram Master",
        category: "word",
        difficulty: "Easy",
        question: "Which word is an anagram of LISTEN?",
        options: [
            "SILENT",
            "LISTED",
            "STOLEN",
            "TINSLE"
        ],
        correctAnswer: 0,
        explanation: "SILENT is an anagram of LISTEN - both use the same letters: L, I, S, T, E, N."
    },
    {
        id: 8,
        title: "The Palindrome Puzzle",
        category: "word",
        difficulty: "Medium",
        question: "Which of these is a palindrome (reads the same forwards and backwards)?",
        options: [
            "HELLO",
            "RACECAR",
            "PYTHON",
            "CODING"
        ],
        correctAnswer: 1,
        explanation: "RACECAR is a palindrome! It reads the same forwards (RACECAR) and backwards (RACECAR)."
    },
    {
        id: 9,
        title: "The Word Chain",
        category: "word",
        difficulty: "Hard",
        question: "Which word can follow 'WATER' and precede 'BALL'?",
        options: [
            "DROP",
            "POLO",
            "MELON",
            "FALL"
        ],
        correctAnswer: 1,
        explanation: "POLO works! WATER POLO is a sport, and POLO BALL could describe the ball used in the game. Though WATER POLO BALL is a better phrase!"
    },

    // Riddles
    {
        id: 10,
        title: "Classic Riddle: The Sphinx",
        category: "riddle",
        difficulty: "Easy",
        question: "What has hands but cannot clap?",
        options: [
            "A clock",
            "A statue",
            "A glove",
            "A mannequin"
        ],
        correctAnswer: 0,
        explanation: "A clock has hands (hour and minute hands) but cannot clap. Simple yet clever!"
    },
    {
        id: 11,
        title: "Tricky Riddle: The Traveler",
        category: "riddle",
        difficulty: "Medium",
        question: "I speak without a mouth and hear without ears. I have no body, but come alive with wind. What am I?",
        options: [
            "An echo",
            "A ghost",
            "The wind itself",
            "A dream"
        ],
        correctAnswer: 0,
        explanation: "An echo! It 'speaks' (repeats sound) without a mouth, 'hears' without ears, has no physical body, and requires air/wind to travel."
    },
    {
        id: 12,
        title: "Brain Teaser Riddle",
        category: "riddle",
        difficulty: "Hard",
        question: "A man pushes his car to a hotel and tells the owner he's bankrupt. Why?",
        options: [
            "He's playing Monopoly",
            "He broke down on the way",
            "He lost his job",
            "The car doesn't work"
        ],
        correctAnswer: 0,
        explanation: "He's playing Monopoly! This is a trick question. In the board game, when you land on a property and go bankrupt, you push your car token to a hotel (the property where you have to pay)."
    }
];

// Game State
let gameState = {
    currentChallengeIndex: 0,
    currentCategory: 'all',
    selectedAnswer: null,
    answered: false,
    completed: new Set(),
    score: 0,
    streak: 0,
    filteredChallenges: [...challenges]
};

// DOM Elements
const challengesContainer = document.getElementById('challengesContainer');
const modal = document.getElementById('challengeModal');
const completionModal = document.getElementById('completionModal');
const navButtons = document.querySelectorAll('.nav-btn');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');
const skipBtn = document.getElementById('skipBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadChallenges();
    setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            navButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterChallenges(e.target.dataset.category);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    skipBtn.addEventListener('click', skipChallenge);
    submitBtn.addEventListener('click', submitAnswer);
    nextBtn.addEventListener('click', closeCompletionModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    completionModal.addEventListener('click', (e) => {
        if (e.target === completionModal) closeCompletionModal();
    });
}

// Load and Display Challenges
function loadChallenges() {
    challengesContainer.innerHTML = '';
    gameState.filteredChallenges.forEach((challenge, index) => {
        const card = createChallengeCard(challenge, index);
        challengesContainer.appendChild(card);
    });
}

function createChallengeCard(challenge, index) {
    const card = document.createElement('div');
    card.className = 'challenge-card';
    if (gameState.completed.has(challenge.id)) {
        card.classList.add('completed');
    }

    card.innerHTML = `
        <h3 class="challenge-title">${challenge.title}</h3>
        <span class="category-badge ${challenge.category}">${challenge.category}</span>
        <p class="challenge-difficulty">Difficulty: ${challenge.difficulty}</p>
    `;

    card.addEventListener('click', () => openChallenge(challenge, index));
    return card;
}

// Filter Challenges by Category
function filterChallenges(category) {
    gameState.currentCategory = category;
    if (category === 'all') {
        gameState.filteredChallenges = [...challenges];
    } else {
        gameState.filteredChallenges = challenges.filter(c => c.category === category);
    }
    loadChallenges();
}

// Open Challenge Modal
function openChallenge(challenge, index) {
    gameState.currentChallengeIndex = index;
    gameState.selectedAnswer = null;
    gameState.answered = false;

    document.getElementById('modalTitle').textContent = challenge.title;
    document.getElementById('modalCategory').textContent = challenge.category;
    document.getElementById('modalChallenge').textContent = challenge.question;

    const optionsContainer = document.getElementById('challengeOptions');
    optionsContainer.innerHTML = '';

    challenge.options.forEach((option, i) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" value="${i}" id="option${i}">
            <label for="option${i}">${option}</label>
        `;
        optionDiv.addEventListener('click', () => selectAnswer(i, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById('feedbackContainer').style.display = 'none';
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Answer';
    modal.classList.add('show');
}

// Select Answer
function selectAnswer(index, element) {
    if (gameState.answered) return;

    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    element.classList.add('selected');
    document.getElementById(`option${index}`).checked = true;
    gameState.selectedAnswer = index;
}

// Submit Answer
function submitAnswer() {
    if (gameState.selectedAnswer === null) {
        alert('Please select an answer!');
        return;
    }

    if (gameState.answered) {
        openCompletionModal();
        return;
    }

    gameState.answered = true;
    const challenge = gameState.filteredChallenges[gameState.currentChallengeIndex];
    const isCorrect = gameState.selectedAnswer === challenge.correctAnswer;

    const feedbackContainer = document.getElementById('feedbackContainer');
    const feedbackText = document.getElementById('feedbackText');
    const explanationText = document.getElementById('explanation');

    feedbackContainer.classList.remove('correct', 'incorrect');
    if (isCorrect) {
        feedbackContainer.classList.add('correct');
        feedbackText.textContent = '✓ Correct!';
        gameState.score += 10;
        gameState.streak += 1;
        gameState.completed.add(challenge.id);
    } else {
        feedbackContainer.classList.add('incorrect');
        feedbackText.textContent = '✗ Incorrect!';
        gameState.streak = 0;
    }

    explanationText.textContent = challenge.explanation;
    feedbackContainer.style.display = 'block';

    // Disable other options and highlight correct answer
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.style.pointerEvents = 'none';
        if (i === challenge.correctAnswer) {
            opt.classList.add('correct');
        } else if (i === gameState.selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });

    submitBtn.textContent = 'Next Challenge';
    submitBtn.disabled = false;
    updateStats();
}

// Skip Challenge
function skipChallenge() {
    gameState.streak = 0;
    closeModal();
}

// Close Modal
function closeModal() {
    modal.classList.remove('show');
    gameState.selectedAnswer = null;
    gameState.answered = false;
}

// Open Completion Modal
function openCompletionModal() {
    const challenge = gameState.filteredChallenges[gameState.currentChallengeIndex];
    document.getElementById('completionMessage').textContent = 
        `Great job! You completed "${challenge.title}" and earned 10 points!`;
    completionModal.classList.add('show');
}

// Close Completion Modal
function closeCompletionModal() {
    completionModal.classList.remove('show');
    closeModal();
    
    // Load next challenge if available
    if (gameState.currentChallengeIndex + 1 < gameState.filteredChallenges.length) {
        gameState.currentChallengeIndex++;
        openChallenge(gameState.filteredChallenges[gameState.currentChallengeIndex], gameState.currentChallengeIndex);
    } else {
        // Show all challenges again
        gameState.currentChallengeIndex = 0;
    }
}

// Update Stats Display
function updateStats() {
    document.getElementById('completedCount').textContent = gameState.completed.size;
    document.getElementById('scoreCount').textContent = gameState.score;
    document.getElementById('streakCount').textContent = gameState.streak;
}

// Initialize on load
updateStats();
