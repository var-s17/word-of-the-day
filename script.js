// List of words with their meanings and example sentences
const words = [
    { word: "Bonjour", meaning: "Good morning (in French)", sentence: 'Example: "Bonjour! Comment ça va?" (Good morning! How are you?)' },
    { word: "Hola", meaning: "Hello (in Spanish)", sentence: 'Example: "¡Hola! ¿Cómo estás?" (Hello! How are you?)' },
    { word: "Ciao", meaning: "Hello/Goodbye (in Italian)", sentence: 'Example: "Ciao! Come stai?" (Hello! How are you?)' },
    { word: "Guten Morgen", meaning: "Good morning (in German)", sentence: 'Example: "Guten Morgen! Wie geht\'s?" (Good morning! How are you?)' },
    { word: "Konnichiwa", meaning: "Hello/Good afternoon (in Japanese)", sentence: 'Example: "Konnichiwa! Ogenki desu ka?" (Good afternoon! How are you?)' },
    { word: "Namaste", meaning: "Hello (in Hindi)", sentence: 'Example: "Namaste! Kaise ho?" (Hello! How are you?)' },
    { word: "Olá", meaning: "Hello (in Portuguese)", sentence: 'Example: "Olá! Como você está?" (Hello! How are you?)' },
    { word: "Merhaba", meaning: "Hello (in Turkish)", sentence: 'Example: "Merhaba! Nasılsın?" (Hello! How are you?)' },
    { word: "Zdravstvuyte", meaning: "Hello (in Russian)", sentence: 'Example: "Zdravstvuyte! Kak dela?" (Hello! How are you?)' },
    { word: "Salam", meaning: "Hello (in Arabic)", sentence: 'Example: "Salam! Kayfa halak?" (Hello! How are you?)' },
    { word: "Sawubona", meaning: "Hello (in Zulu)", sentence: 'Example: "Sawubona! Unjani?" (Hello! How are you?)' },
    { word: "Shalom", meaning: "Hello/Peace (in Hebrew)", sentence: 'Example: "Shalom! Ma nishma?" (Hello! How are you?)' },
    { word: "Xin chào", meaning: "Hello (in Vietnamese)", sentence: 'Example: "Xin chào! Bạn khỏe không?" (Hello! How are you?)' },
    { word: "Sawasdee", meaning: "Hello (in Thai)", sentence: 'Example: "Sawasdee! Sabai dee mai?" (Hello! How are you?)' },
    { word: "Annyeong", meaning: "Hello (in Korean)", sentence: 'Example: "Annyeong! Jal jinae?" (Hello! How are you?)' },
    { word: "Hej", meaning: "Hello (in Swedish)", sentence: 'Example: "Hej! Hur mår du?" (Hello! How are you?)' },
    { word: "Salut", meaning: "Hello (in French)", sentence: 'Example: "Salut! Comment ça va?" (Hello! How are you?)' },
    { word: "Ahoj", meaning: "Hello (in Czech)", sentence: 'Example: "Ahoj! Jak se máš?" (Hello! How are you?)' },
    { word: "Kamusta", meaning: "Hello (in Filipino)", sentence: 'Example: "Kamusta! Kumusta ka?" (Hello! How are you?)' },
    { word: "Jambo", meaning: "Hello (in Swahili)", sentence: 'Example: "Jambo! Habari gani?" (Hello! How are you?)' },
    { word: "Bună ziua", meaning: "Good day (in Romanian)", sentence: 'Example: "Bună ziua! Ce faci?" (Good day! How are you?)' },
    { word: "Helo", meaning: "Hello (in Welsh)", sentence: 'Example: "Helo! Sut wyt ti?" (Hello! How are you?)' },
    { word: "Dobrý den", meaning: "Good day (in Czech)", sentence: 'Example: "Dobrý den! Jak se máte?" (Good day! How are you?)' },
    { word: "Merhaba", meaning: "Hello (in Turkish)", sentence: 'Example: "Merhaba! Nasılsınız?" (Hello! How are you?)' },
    { word: "Tere", meaning: "Hello (in Estonian)", sentence: 'Example: "Tere! Kuidas sul läheb?" (Hello! How are you?)' },
    { word: "Kia ora", meaning: "Hello (in Maori)", sentence: 'Example: "Kia ora! Kei te pēhea koe?" (Hello! How are you?)' },
    { word: "Hei", meaning: "Hello (in Finnish)", sentence: 'Example: "Hei! Miten menee?" (Hello! How are you?)' },
    { word: "Ola", meaning: "Hello (in Galician)", sentence: 'Example: "Ola! Como estás?" (Hello! How are you?)' },
    { word: "Cześć", meaning: "Hello (in Polish)", sentence: 'Example: "Cześć! Jak się masz?" (Hello! How are you?)' },
    { word: "Halo", meaning: "Hello (in Indonesian)", sentence: 'Example: "Halo! Apa kabar?" (Hello! How are you?)' },
    { word: "Sveiki", meaning: "Hello (in Latvian)", sentence: 'Example: "Sveiki! Kā tev iet?" (Hello! How are you?)' },
    { word: "Holla", meaning: "Hello (in Spanish slang)", sentence: 'Example: "Holla! ¿Qué tal?" (Hello! How are you?)' },
    { word: "Kamusta", meaning: "Hello (in Tagalog)", sentence: 'Example: "Kamusta! Ano ang balita?" (Hello! How are you?)' },
    { word: "Pryvit", meaning: "Hello (in Ukrainian)", sentence: 'Example: "Pryvit! Yak spravy?" (Hello! How are you?)' },
    { word: "Saluton", meaning: "Hello (in Esperanto)", sentence: 'Example: "Saluton! Kiel vi fartas?" (Hello! How are you?)' },
    { word: "Hei", meaning: "Hello (in Norwegian)", sentence: 'Example: "Hei! Hvordan har du det?" (Hello! How are you?)' },
    { word: "Tere", meaning: "Hello (in Estonian)", sentence: 'Example: "Tere! Kuidas sul läheb?" (Hello! How are you?)' },
    { word: "Moi", meaning: "Hello (in Finnish)", sentence: 'Example: "Moi! Miten menee?" (Hello! How are you?)' },
    { word: "Aloha", meaning: "Hello/Goodbye (in Hawaiian)", sentence: 'Example: "Aloha! Pehea oe?" (Hello! How are you?)' },
    { word: "Hujambo", meaning: "Hello (in Swahili)", sentence: 'Example: "Hujambo! Habari gani?" (Hello! How are you?)' },
    { word: "Yo", meaning: "Hello (in American slang)", sentence: 'Example: "Yo! What\'s up?" (Hello! What\'s up?)' },
    { word: "Szia", meaning: "Hello (in Hungarian)", sentence: 'Example: "Szia! Hogy vagy?" (Hello! How are you?)' },
    { word: "Yassou", meaning: "Hello (in Greek)", sentence: 'Example: "Yassou! Ti kaneis?" (Hello! How are you?)' },
    { word: "Sannu", meaning: "Hello (in Hausa)", sentence: 'Example: "Sannu! Lafiya lau?" (Hello! How are you?)' },
    { word: "Hail", meaning: "Hello (in Scottish)", sentence: 'Example: "Hail! How are ye?" (Hello! How are you?)' },
    { word: "An-nyeong", meaning: "Hello (in Korean)", sentence: 'Example: "An-nyeong! Jal jinae?" (Hello! How are you?)' },
    { word: "Nǐ hǎo", meaning: "Hello (in Mandarin Chinese)", sentence: 'Example: "Nǐ hǎo! Nǐ hǎo ma?" (Hello! How are you?)' },
    { word: "G'day", meaning: "Hello (in Australian English)", sentence: 'Example: "G\'day! How\'s it going?" (Hello! How\'s it going?)' },
    { word: "Salve", meaning: "Hello (in Latin)", sentence: 'Example: "Salve! Quid agis?" (Hello! How are you?)' }
];

// Function to select a random word
function newWord() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * words.length);
    
    // Get the word and its details
    const randomWord = words[randomIndex];
    
    // Update the page with the new word and its details
    document.getElementById("word").textContent = randomWord.word;
    document.getElementById("meaning").textContent = randomWord.meaning;
    document.getElementById("sentence").textContent = randomWord.sentence;
}

// Call the newWord function once the page loads to show an initial word
window.onload = newWord;
