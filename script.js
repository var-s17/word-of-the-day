const words = [
    {
        word: 'Bonjour',
        meaning: 'Good morning (in French)',
        sentence: 'Example: "Bonjour! Comment ça va?" (Good morning! How are you?)'
    },
    {
        word: 'Gracias',
        meaning: 'Thank you (in Spanish)',
        sentence: 'Example: "Gracias por tu ayuda!" (Thank you for your help!)'
    },
    {
        word: 'Danke',
        meaning: 'Thank you (in German)',
        sentence: 'Example: "Danke für alles!" (Thank you for everything!)'
    },
    {
        word: 'Namaste',
        meaning: 'A respectful greeting (in Hindi)',
        sentence: 'Example: "Namaste, kaise ho?" (Hello, how are you?)'
    },
    {
        word: 'Nandri',
        meaning: 'Romba periya Udavi (in Tamil)',
        sentence: 'Example: "Nandrigal Pala" (mikka nandri)'
    },
    // Add more words here as needed
];

    if (selectedAnswer === correctAnswer) {
        document.getElementById("result").innerText = "✅ Correct!";
        document.getElementById("result").style.color = "green";
        document.getElementById("nextBtn").classList.remove("hidden");
    } else {
        document.getElementById("result").innerText = "❌ Wrong! Try Again!";
        document.getElementById("result").style.color = "red";
        document.getElementById("tryAgainBtn").classList.remove("hidden");
    }
}

    document.getElementById('word').textContent = randomWord.word;
    document.getElementById('meaning').textContent = randomWord.meaning;
    document.getElementById('sentence').textContent = randomWord.sentence;
}
