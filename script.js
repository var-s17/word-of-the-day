// List of words with their meanings and example sentences
const words = [
    { word: "Bonjour", meaning: "Good morning (in French)", sentence: "Example: 'Bonjour! Comment ça va?'" },
    { word: "Hola", meaning: "Hello (in Spanish)", sentence: "Example: '¡Hola! ¿Cómo estás?'" },
    { word: "Ciao", meaning: "Hello/Goodbye (in Italian)", sentence: "Example: 'Ciao! Come stai?'" },
    { word: "Konnichiwa", meaning: "Good afternoon (in Japanese)", sentence: "Example: 'Konnichiwa! Ogenki desu ka?'" },
    { word: "Namaste", meaning: "Hello (in Hindi)", sentence: "Example: 'Namaste! Kaise ho?'" },
    { word: "Merhaba", meaning: "Hello (in Turkish)", sentence: "Example: 'Merhaba! Nasılsın?'" },
    { word: "Zdravstvuyte", meaning: "Hello (in Russian)", sentence: "Example: 'Zdravstvuyte! Kak dela?'" },
    { word: "Sawubona", meaning: "Hello (in Zulu)", sentence: "Example: 'Sawubona! Unjani?'" },
    { word: "Shalom", meaning: "Hello/Peace (in Hebrew)", sentence: "Example: 'Shalom! Ma nishma?'" },
    { word: "Annyeong", meaning: "Hello (in Korean)", sentence: "Example: 'Annyeong! Jal jinae?'" },
    { word: "Guten Morgen", meaning: "Good morning (in German)", sentence: "Example: 'Guten Morgen! Wie geht’s?'" },
    { word: "Salve", meaning: "Hello (in Latin)", sentence: "Example: 'Salve! Quid agis?'" },
    { word: "G’day", meaning: "Hello (in Australian English)", sentence: "Example: 'G’day! How’s it going?'" },
    { word: "Aloha", meaning: "Hello/Goodbye (in Hawaiian)", sentence: "Example: 'Aloha! Pehea oe?'" },
    { word: "Hej", meaning: "Hello (in Swedish)", sentence: "Example: 'Hej! Hur mår du?'" },
    { word: "Xin chào", meaning: "Hello (in Vietnamese)", sentence: "Example: 'Xin chào! Bạn có khỏe không?'" },
    { word: "Tere", meaning: "Hello (in Estonian)", sentence: "Example: 'Tere! Kuidas läheb?'" },
    { word: "Salam", meaning: "Hello (in Persian)", sentence: "Example: 'Salam! Hale shoma chetore?'" },
    { word: "Szia", meaning: "Hello (in Hungarian)", sentence: "Example: 'Szia! Hogy vagy?'" },
    { word: "Hallo", meaning: "Hello (in Dutch)", sentence: "Example: 'Hallo! Hoe gaat het?'" },
    { word: "Hei", meaning: "Hello (in Finnish)", sentence: "Example: 'Hei! Miten menee?'" },
    { word: "Kia ora", meaning: "Hello (in Māori)", sentence: "Example: 'Kia ora! Kei te pēhea koe?'" },
    { word: "Selamat pagi", meaning: "Good morning (in Indonesian)", sentence: "Example: 'Selamat pagi! Apa kabar?'" },
    { word: "Bom dia", meaning: "Good morning (in Portuguese)", sentence: "Example: 'Bom dia! Como você está?'" },
    { word: "Buongiorno", meaning: "Good morning (in Italian)", sentence: "Example: 'Buongiorno! Come stai?'" },
    { word: "Ohayō", meaning: "Good morning (in Japanese)", sentence: "Example: 'Ohayō! Genki desu ka?'" },
    { word: "Buenos días", meaning: "Good morning (in Spanish)", sentence: "Example: 'Buenos días! ¿Cómo estás?'" },
    { word: "Dobré ráno", meaning: "Good morning (in Czech)", sentence: "Example: 'Dobré ráno! Jak se máš?'" },
    { word: "God morgen", meaning: "Good morning (in Norwegian)", sentence: "Example: 'God morgen! Hvordan har du det?'" },
    { word: "Hyvää huomenta", meaning: "Good morning (in Finnish)", sentence: "Example: 'Hyvää huomenta! Kuinka voit?'" },
    { word: "Sabah al-khayr", meaning: "Good morning (in Arabic)", sentence: "Example: 'Sabah al-khayr! Kayfa haluka?'" },
    { word: "Zǎoshang hǎo", meaning: "Good morning (in Chinese)", sentence: "Example: 'Zǎoshang hǎo! Nǐ hǎo ma?'" },
    { word: "Goeie môre", meaning: "Good morning (in Afrikaans)", sentence: "Example: 'Goeie môre! Hoe gaan dit?'" },
    { word: "Dzień dobry", meaning: "Good morning (in Polish)", sentence: "Example: 'Dzień dobry! Jak się masz?'" },
    { word: "Dobré ráno", meaning: "Good morning (in Slovak)", sentence: "Example: 'Dobré ráno! Ako sa máš?'" },
    { word: "Goedemorgen", meaning: "Good morning (in Dutch)", sentence: "Example: 'Goedemorgen! Hoe gaat het?'" },
    { word: "God dag", meaning: "Good day (in Norwegian)", sentence: "Example: 'God dag! Hvordan går det?'" },
    { word: "Buongiorno", meaning: "Good morning (in Italian)", sentence: "Example: 'Buongiorno! Come stai?'" },
    { word: "Bonjourno", meaning: "Hello (in Occitan)", sentence: "Example: 'Bonjourno! Coma va?' (How's it going?)" },
    // Add more as needed up to 100+ words...
];

// Function to display a random word
function changeLanguage() {
    const newLanguage = prompt("Choose a language: english, french, spanish, tamil").toLowerCase();
    if (wordLists[newLanguage]) {
        selectedLanguage = newLanguage;
        localStorage.setItem("language", newLanguage);
        words = wordLists[newLanguage];
        alert(`Language changed to ${newLanguage}.`);
        newWord(); // Display a word in the new language
    } else {
        alert("Invalid language choice.");
    }
}

function newWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];

    document.getElementById("word").textContent = randomWord.word;
    document.getElementById("meaning").textContent = randomWord.meaning;
    document.getElementById("sentence").textContent = randomWord.sentence;
}

// Redirect to login and clear data
function backToLogin() {
    localStorage.clear(); // Clear user data
    window.location.href = "index.html"; // Redirect to login page
}

// On page load, display the user's name and the first random word
window.onload = function () {
    const userName = localStorage.getItem('name');
    if (userName) {
        document.getElementById('welcome-message').textContent = `Word of the Day, ${userName}!`;
    } else {
        window.location.href = "index.html"; // Redirect to login if no user data
    }
    newWord(); // Display an initial word
};
const wordLists = {
    english: englishWords,  // English words
    french: frenchWords,    // French words
    spanish: spanishWords,  // Spanish words
    tamil: tamilWords       // Tamil words
};
function changeLanguage() {
    const newLanguage = prompt("Choose a language: english, french, spanish, tamil").toLowerCase();
    if (wordLists[newLanguage]) {
        selectedLanguage = newLanguage;
        localStorage.setItem("language", newLanguage);
        words = wordLists[newLanguage];
        alert(`Language changed to ${newLanguage}.`);
        newWord(); // Display a word in the new language
    } else {
        alert("Invalid language choice.");
    }
}
