const quizData = {
    english: [
            { question: "What is the meaning of 'Brilliant'?", options: ["Dull", "Very Smart", "Slow", "Boring"], correct: "Very Smart" },
            { question: "What is the meaning of 'Gigantic'?", options: ["Huge", "Tiny", "Small", "Weak"], correct: "Huge" },
            { question: "What is the meaning of 'Swift'?", options: ["Fast", "Slow", "Lazy", "Boring"], correct: "Fast" },
            { question: "What is the meaning of 'Enormous'?", options: ["Huge", "Tiny", "Weak", "Dull"], correct: "Huge" },
            { question: "What is the meaning of 'Ancient'?", options: ["Old", "New", "Modern", "Future"], correct: "Old" },
            { question: "What is the meaning of 'Delighted'?", options: ["Happy", "Sad", "Angry", "Bored"], correct: "Happy" },
            { question: "What is the meaning of 'Fragile'?", options: ["Strong", "Breakable", "Tough", "Heavy"], correct: "Breakable" },
            { question: "What is the meaning of 'Courageous'?", options: ["Brave", "Scared", "Timid", "Weak"], correct: "Brave" },
            { question: "What is the meaning of 'Gloomy'?", options: ["Bright", "Dark", "Happy", "Fast"], correct: "Dark" },
            { question: "What is the meaning of 'Vibrant'?", options: ["Dull", "Lively", "Sad", "Weak"], correct: "Lively" },
            { question: "What is the meaning of 'Generous'?", options: ["Selfish", "Kind", "Mean", "Rude"], correct: "Kind" },
            { question: "What is the meaning of 'Exhausted'?", options: ["Energetic", "Tired", "Happy", "Bored"], correct: "Tired" },
            { question: "What is the meaning of 'Precious'?", options: ["Valuable", "Cheap", "Useless", "Unimportant"], correct: "Valuable" },
            { question: "What is the meaning of 'Wicked'?", options: ["Good", "Evil", "Kind", "Nice"], correct: "Evil" },
            { question: "What is the meaning of 'Gentle'?", options: ["Harsh", "Soft", "Loud", "Mean"], correct: "Soft" },
            { question: "What is the meaning of 'Massive'?", options: ["Huge", "Tiny", "Small", "Weak"], correct: "Huge" },
            { question: "What is the meaning of 'Tremendous'?", options: ["Very Big", "Tiny", "Weak", "Slow"], correct: "Very Big" },
            { question: "What is the meaning of 'Furious'?", options: ["Angry", "Calm", "Happy", "Lazy"], correct: "Angry" },
            { question: "What is the meaning of 'Reliable'?", options: ["Untrustworthy", "Trustworthy", "Weak", "Doubtful"], correct: "Trustworthy" },
            { question: "What is the meaning of 'Timid'?", options: ["Brave", "Shy", "Loud", "Strong"], correct: "Shy" },
            { question: "What is the meaning of 'Luminous'?", options: ["Bright", "Dark", "Weak", "Dull"], correct: "Bright" },
            { question: "What is the meaning of 'Perplexed'?", options: ["Confused", "Clear", "Happy", "Sad"], correct: "Confused" },
            { question: "What is the meaning of 'Witty'?", options: ["Clever", "Dull", "Slow", "Weak"], correct: "Clever" },
            { question: "What is the meaning of 'Miserable'?", options: ["Happy", "Sad", "Excited", "Proud"], correct: "Sad" },
            { question: "What is the meaning of 'Jubilant'?", options: ["Joyful", "Sad", "Angry", "Bored"], correct: "Joyful" },
            { question: "What is the meaning of 'Mysterious'?", options: ["Unknown", "Obvious", "Clear", "Bright"], correct: "Unknown" },
            { question: "What is the meaning of 'Obedient'?", options: ["Disobedient", "Respectful", "Rude", "Lazy"], correct: "Respectful" },
            { question: "What is the meaning of 'Peculiar'?", options: ["Strange", "Normal", "Boring", "Common"], correct: "Strange" },
            { question: "What is the meaning of 'Sincere'?", options: ["Honest", "Fake", "Mean", "Rude"], correct: "Honest" },
            { question: "What is the meaning of 'Valiant'?", options: ["Brave", "Cowardly", "Weak", "Lazy"], correct: "Brave" },
            { question: "What is the meaning of 'Fascinating'?", options: ["Interesting", "Boring", "Dull", "Weak"], correct: "Interesting" },
            { question: "What is the meaning of 'Humble'?", options: ["Modest", "Proud", "Arrogant", "Loud"], correct: "Modest" },
            { question: "What is the meaning of 'Nimble'?", options: ["Quick", "Slow", "Heavy", "Lazy"], correct: "Quick" },
            { question: "What is the meaning of 'Cheerful'?", options: ["Happy", "Sad", "Angry", "Bored"], correct: "Happy" },
            { question: "What is the meaning of 'Cunning'?", options: ["Clever", "Dumb", "Honest", "Weak"], correct: "Clever" },
            { question: "What is the meaning of 'Weary'?", options: ["Tired", "Energetic", "Excited", "Loud"], correct: "Tired" },
            { question: "What is the meaning of 'Clumsy'?", options: ["Awkward", "Graceful", "Fast", "Strong"], correct: "Awkward" },
            { question: "What is the meaning of 'Tidy'?", options: ["Neat", "Messy", "Dirty", "Ugly"], correct: "Neat" }
        ],
        
    spanish: [
            { question: "¿Qué significa 'Feliz'?", options: ["Triste", "Alegre", "Enojado", "Cansado"], correct: "Alegre" },
            { question: "¿Qué significa 'Rápido'?", options: ["Lento", "Veloz", "Pesado", "Débil"], correct: "Veloz" },
            { question: "¿Qué significa 'Grande'?", options: ["Pequeño", "Gigante", "Débil", "Delgado"], correct: "Gigante" },
            { question: "¿Qué significa 'Hermoso'?", options: ["Feo", "Bonito", "Viejo", "Malo"], correct: "Bonito" },
            { question: "¿Qué significa 'Inteligente'?", options: ["Tonto", "Listo", "Perezoso", "Aburrido"], correct: "Listo" },
            { question: "¿Qué significa 'Fuerte'?", options: ["Débil", "Robusto", "Duro", "Pequeño"], correct: "Robusto" },
            { question: "¿Qué significa 'Peligroso'?", options: ["Seguro", "Arriesgado", "Amigable", "Dócil"], correct: "Arriesgado" },
            { question: "¿Qué significa 'Cálido'?", options: ["Frío", "Caliente", "Suave", "Oscuro"], correct: "Caliente" },
            { question: "¿Qué significa 'Delgado'?", options: ["Gordo", "Flaco", "Corto", "Ancho"], correct: "Flaco" },
            { question: "¿Qué significa 'Oscuro'?", options: ["Brillante", "Negro", "Luminoso", "Fuerte"], correct: "Negro" },
            { question: "¿Qué significa 'Generoso'?", options: ["Egoísta", "Amable", "Tacaño", "Triste"], correct: "Amable" },
            { question: "¿Qué significa 'Tranquilo'?", options: ["Ruidoso", "Sereno", "Alegre", "Nervioso"], correct: "Sereno" },
            { question: "¿Qué significa 'Valiente'?", options: ["Cobarde", "Fuerte", "Malo", "Débil"], correct: "Fuerte" },
            { question: "¿Qué significa 'Misterioso'?", options: ["Obvio", "Extraño", "Claro", "Conocido"], correct: "Extraño" },
            { question: "¿Qué significa 'Despierto'?", options: ["Dormido", "Atento", "Perezoso", "Aburrido"], correct: "Atento" },
            { question: "¿Qué significa 'Brillante'?", options: ["Opaco", "Luz", "Oscuro", "Débil"], correct: "Luz" },
            { question: "¿Qué significa 'Joven'?", options: ["Viejo", "Nuevo", "Bebé", "Anciano"], correct: "Nuevo" },
            { question: "¿Qué significa 'Tímido'?", options: ["Sociable", "Callado", "Seguro", "Atrevido"], correct: "Callado" },
            { question: "¿Qué significa 'Duro'?", options: ["Suave", "Firme", "Débil", "Flexible"], correct: "Firme" },
            { question: "¿Qué significa 'Pobre'?", options: ["Rico", "Modesto", "Pésimo", "Caro"], correct: "Modesto" },
            { question: "¿Qué significa 'Corto'?", options: ["Largo", "Bajo", "Rápido", "Ancho"], correct: "Bajo" },
            { question: "¿Qué significa 'Apurado'?", options: ["Calmado", "Rápido", "Lento", "Nervioso"], correct: "Rápido" },
            { question: "¿Qué significa 'Puntual'?", options: ["Tardío", "Exacto", "Olvidadizo", "Impaciente"], correct: "Exacto" },
            { question: "¿Qué significa 'Contento'?", options: ["Feliz", "Triste", "Asustado", "Molesto"], correct: "Feliz" },
            { question: "¿Qué significa 'Cómodo'?", options: ["Incómodo", "Relajado", "Aburrido", "Cansado"], correct: "Relajado" },
            { question: "¿Qué significa 'Justo'?", options: ["Injusto", "Honesto", "Malvado", "Inteligente"], correct: "Honesto" },
            { question: "¿Qué significa 'Famoso'?", options: ["Popular", "Desconocido", "Viejo", "Nuevo"], correct: "Popular" },
            { question: "¿Qué significa 'Silencioso'?", options: ["Ruidoso", "Tranquilo", "Molesto", "Lento"], correct: "Tranquilo" },
            { question: "¿Qué significa 'Débil'?", options: ["Fuerte", "Duro", "Blando", "Poderoso"], correct: "Blando" },
            { question: "¿Qué significa 'Educado'?", options: ["Malcriado", "Respetuoso", "Brusco", "Gritón"], correct: "Respetuoso" },
            { question: "¿Qué significa 'Peligroso'?", options: ["Seguro", "Arriesgado", "Feliz", "Calmado"], correct: "Arriesgado" },
            { question: "¿Qué significa 'Dichoso'?", options: ["Afortunado", "Infeliz", "Malo", "Envidioso"], correct: "Afortunado" },
            { question: "¿Qué significa 'Atrevido'?", options: ["Tímido", "Valiente", "Torpe", "Perezoso"], correct: "Valiente" },
            { question: "¿Qué significa 'Frágil'?", options: ["Roto", "Duro", "Resistente", "Débil"], correct: "Débil" },
            { question: "¿Qué significa 'Extraño'?", options: ["Normal", "Raro", "Común", "Famoso"], correct: "Raro" },
            { question: "¿Qué significa 'Denso'?", options: ["Ligero", "Pesado", "Fluido", "Débil"], correct: "Pesado" },
            { question: "¿Qué significa 'Amable'?", options: ["Grossero", "Simpático", "Malo", "Rudo"], correct: "Simpático" },
            { question: "¿Qué significa 'Falso'?", options: ["Verdadero", "Engañoso", "Incorrecto", "Dudoso"], correct: "Engañoso" },
            { question: "¿Qué significa 'Sano'?", options: ["Enfermo", "Saludable", "Delgado", "Pálido"], correct: "Saludable" }
        ],
         // Add 99 more questions...
    tamil: [
  { question: "'அன்பு' எனும் வார்த்தையின் அர்த்தம்?", options: ["வெறுப்பு", "பாசம்", "கோபம்", "தீமை"], correct: "அன்பு" },
                { question: "'சாதி' எனும் வார்த்தையின் அர்த்தம்?", options: ["மக்கள் பிரிவு", "மழை", "நதி", "பூ"], correct: "மக்கள் பிரிவு" },
                { question: "'மகிழ்ச்சி' எனும் வார்த்தையின் அர்த்தம்?", options: ["கோபம்", "இன்பம்", "அழுகை", "சோர்வு"], correct: "மகிழ்ச்சி" },
                { question: "'நட்பு' என்பதன் பொருள்?", options: ["சண்டை", "நண்பர்", "வெறுப்பு", "பயம்"], correct: "நட்பு" },
                { question: "'கண்' என்பதன் பொருள்?", options: ["முகம்", "மூக்கு", "பார்வை", "வாய்"], correct: "கண்" },
                { question: "'சூரியன்' என்பதன் பொருள்?", options: ["நிலா", "வெயில்", "மழை", "பூ"], correct: "வெயில்" },
                { question: "'வானம்' என்பதன் பொருள்?", options: ["கடல்", "நிலம்", "வானம்", "மரம்"], correct: "வானம்" },
                { question: "'நிலா' என்பதன் பொருள்?", options: ["சூரியன்", "மதி", "காற்று", "நதி"], correct: "நிலா" },
                { question: "'மழை' என்பதன் பொருள்?", options: ["மழை", "காற்று", "பூ", "மரம்"], correct: "மழை" },
                { question: "'மரம்' என்பதன் பொருள்?", options: ["மரம்", "காற்று", "மழை", "பூ"], correct: "மரம்" },
                { question: "'காற்று' என்பதன் பொருள்?", options: ["நதி", "காற்று", "மழை", "மரம்"], correct: "காற்று" },
                { question: "'பறவை' என்பதன் பொருள்?", options: ["மிருகம்", "முட்டை", "பறவை", "மரம்"], correct: "பறவை" },
                { question: "'நதி' என்பதன் பொருள்?", options: ["ஆறு", "காடு", "மழை", "மரம்"], correct: "நதி" },
                { question: "'பூ' என்பதன் பொருள்?", options: ["மரம்", "காற்று", "பூ", "மழை"], correct: "பூ" },
                { question: "'கடல்' என்பதன் பொருள்?", options: ["கடல்", "மழை", "காற்று", "நதி"], correct: "கடல்" },
                { question: "'நிலம்' என்பதன் பொருள்?", options: ["மரம்", "நிலம்", "காற்று", "மழை"], correct: "நிலம்" },
                { question: "'மிருகம்' என்பதன் பொருள்?", options: ["மிருகம்", "பறவை", "மரம்", "மழை"], correct: "மிருகம்" },
                { question: "'புது' என்பதன் பொருள்?", options: ["பழைய", "புது", "நீளமான", "குடி"], correct: "புது" },
                { question: "'அழகு' என்பதன் பொருள்?", options: ["கோழை", "அழகு", "தூசி", "சிவப்பு"], correct: "அழகு" },
                { question: "'வசந்தம்' என்பதன் பொருள்?", options: ["பசுமை", "குளிர்", "வசந்தம்", "வெயில்"], correct: "வசந்தம்" },
                { question: "'குடும்பம்' என்பதன் பொருள்?", options: ["நண்பர்கள்", "உறவினர்", "பள்ளி", "மரம்"], correct: "குடும்பம்" },
                { question: "'கை' என்பதன் பொருள்?", options: ["கை", "கால்", "முகம்", "வாய்"], correct: "கை" },
                { question: "'பரிவு' என்பதன் பொருள்?", options: ["நட்பு", "பரிவு", "சண்டை", "அழுகை"], correct: "பரிவு" },
                { question: "'அச்சம்' என்பதன் பொருள்?", options: ["அன்பு", " பயம்", "வெறுப்பு", "சிலர்"], correct: "அச்சம்" },
                { question: "'நலம்' என்பதன் பொருள்?", options: ["நலம்", "நோய்", "தொல்லை", "சோர்வு"], correct: "நலம்" },
                { question: "'சாந்தி' என்பதன் பொருள்?", options: ["சந்தோஷம்", "அமைதி", "சண்டை", "மகிழ்ச்சி"], correct: "அமைதி" },
                { question: "'வீடு' என்பதன் பொருள்?", options: ["இல்லம்", "பள்ளி", "வணிகம்", "அருகம்"], correct: "வீடு" },
                { question: "'படிப்பு' என்பதன் பொருள்?", options: ["பாடம்", "படிப்பு", "வேலை", "சந்தை"], correct: "படிப்பு" },
                { question: "'நேர்மை' என்பதன் பொருள்?", options: ["மொழி", "சத்தியம்", "குற்றம்", "வெறுப்பு"], correct: "சத்தியம்" },
                { question: "'பெருமை' என்பதன் பொருள்?", options: ["அழுகை", "பெருமை", "தாழ்வு", "கோபம்"], correct: "பெருமை" },
                { question: "'அம்சம்' என்பதன் பொருள்?", options: ["மதிப்பு", "குறிப்பு", "இலட்சணம்", "பொருள்"], correct: "அம்சம்" },
                { question: "'வானொலி' என்பதன் பொருள்?", options: ["பயணம்", "செய்தி", "ரேடியோ", "வழக்கு"], correct: "வானொலி" },
                { question: "'பக்கம்' என்பதன் பொருள்?", options: ["அருகில்", "வெளியில்", "பக்கம்", "வெளி"], correct: "பக்கம்" },
                { question: "'துணை' என்பதன் பொருள்?", options: ["உதவி", "துணை", "தொல்லை", "வாழ்வு"], correct: "துணை" },
                { question: "'பூச்சி' என்பதன் பொருள்?", options: ["மரம்", "வண்டு", "பூச்சி", "மழை"], correct: "பூச்சி" },
                { question: "'சவால்' என்பதன் பொருள்?", options: ["சண்டை", "சவால்", "வெற்றி", "தோல்வி"], correct: "சவால்" },
                { question: "'அருகில்' என்பதன் பொருள்?", options: ["வெளியில்", "பக்கத்தில்", "சிலர்", "கொசு"], correct: "அருகில்" },
                { question: "'வண்ணம்' என்பதன் பொருள்?", options: ["நிறம்", "ஒளி", "வண்ணம்", "அழகு"], correct: "வண்ணம்" },
                { question: "'மதிப்பு' என்பதன் பொருள்?", options: ["தாழ்வு", "மதிப்பு", "அமைதி", "சமாதானம்"], correct: "மதிப்பு" },
        { question: "'மகிழ்ச்சி' எனும் வார்த்தையின் அர்த்தம்?", options: ["கோபம்", "மகிழ்ச்சி", "அழுகை", "சோர்வு"], correct: "மகிழ்ச்சி" },
        { question: "'அன்பு' என்பதன் பொருள்?", options: ["தவறு", "பாசம்", "கோபம்", "துக்கம்"], correct: "பாசம்" },
        { question: "'விவேகம்' என்றால்?", options: ["முட்டாள்தனம்", "அறிவு", "கோபம்", "பயம்"], correct: "அறிவு" },
        { question: "'நட்பு' என்பதன் அர்த்தம்?", options: ["விரோதம்", "நட்பு", "பயம்", "துக்கம்"], correct: "நட்பு" },// Add 98 more questions...
    // Add 99 more questions...
    ],
    french: [
            { question: "Que signifie 'Heureux'?", options: ["Triste", "Joyeux", "Fâché", "Fatigué"], correct: "Joyeux" },
            { question: "Que signifie 'Rapide'?", options: ["Lent", "Vite", "Petit", "Gros"], correct: "Vite" },
            { question: "Que signifie 'Amical'?", options: ["Gentil", "Méchant", "Fâché", "Paresseux"], correct: "Gentil" },
            { question: "Que signifie 'Sombre'?", options: ["Lumineux", "Noir", "Bleu", "Brillant"], correct: "Noir" },
            { question: "Que signifie 'Douce'?", options: ["Rude", "Molle", "Dure", "Brillante"], correct: "Molle" },
            { question: "Que signifie 'Rêver'?", options: ["Dormir", "Penser", "Manger", "Marcher"], correct: "Penser" },
            { question: "Que signifie 'Chaleur'?", options: ["Froid", "Chaud", "Mouillé", "Sec"], correct: "Chaud" },
            { question: "Que signifie 'Fatigué'?", options: ["Éveillé", "Reposé", "Épuisé", "Actif"], correct: "Épuisé" },
            { question: "Que signifie 'Tranquille'?", options: ["Silencieux", "Bavard", "Bruyant", "Rapide"], correct: "Silencieux" },
            { question: "Que signifie 'Courageux'?", options: ["Peureux", "Audacieux", "Timide", "Faible"], correct: "Audacieux" },
            { question: "Que signifie 'Gourmand'?", options: ["Avare", "Qui aime bien manger", "Intelligent", "Généreux"], correct: "Qui aime bien manger" },
            { question: "Que signifie 'Petit'?", options: ["Grand", "Minuscule", "Immense", "Énorme"], correct: "Minuscule" },
            { question: "Que signifie 'Ancien'?", options: ["Moderne", "Vieux", "Nouveau", "Futur"], correct: "Vieux" },
            { question: "Que signifie 'Content'?", options: ["Heureux", "Triste", "Fatigué", "Énervé"], correct: "Heureux" },
            { question: "Que signifie 'Chanter'?", options: ["Parler", "Danser", "Jouer", "Produire de la musique avec la voix"], correct: "Produire de la musique avec la voix" },
            { question: "Que signifie 'Timide'?", options: ["Courageux", "Silencieux", "Brave", "Sociable"], correct: "Silencieux" },
            { question: "Que signifie 'Aimer'?", options: ["Détester", "Adorer", "Haïr", "Ignorer"], correct: "Adorer" },
            { question: "Que signifie 'Écouter'?", options: ["Entendre", "Regarder", "Parler", "Chanter"], correct: "Entendre" },
            { question: "Que signifie 'Écrire'?", options: ["Lire", "Dessiner", "Tracer des lettres", "Effacer"], correct: "Tracer des lettres" },
            { question: "Que signifie 'Oublier'?", options: ["Se souvenir", "Ignorer", "Ne pas se rappeler", "Répéter"], correct: "Ne pas se rappeler" },
            { question: "Que signifie 'Chercher'?", options: ["Regarder", "Trouver", "Perdre", "Rechercher"], correct: "Rechercher" },
            { question: "Que signifie 'Rouge'?", options: ["Vert", "Bleu", "Jaune", "La couleur du feu"], correct: "La couleur du feu" },
            { question: "Que signifie 'Rapide'?", options: ["Lent", "Vite", "Lourd", "Calme"], correct: "Vite" },
            { question: "Que signifie 'Solide'?", options: ["Dur", "Mou", "Liquide", "Fragile"], correct: "Dur" },
            { question: "Que signifie 'Éteindre'?", options: ["Allumer", "Arrêter", "Éclairer", "Chauffer"], correct: "Arrêter" },
            { question: "Que signifie 'Jardin'?", options: ["Parc", "Terrasse", "Espace vert", "Forêt"], correct: "Espace vert" },
            { question: "Que signifie 'Vite'?", options: ["Doucement", "Lentement", "Rapidement", "Calmement"], correct: "Rapidement" },
            { question: "Que signifie 'Facile'?", options: ["Difficile", "Simple", "Complexe", "Imposant"], correct: "Simple" },
            { question: "Que signifie 'Lumière'?", options: ["Sombre", "Clair", "Obscur", "Petit"], correct: "Clair" },
            { question: "Que signifie 'Propre'?", options: ["Sale", "Net", "Désordonné", "Usé"], correct: "Net" },
            { question: "Que signifie 'Étranger'?", options: ["Local", "Inconnu", "Distant", "National"], correct: "Inconnu" },
            { question: "Que signifie 'Ombre'?", options: ["Lumière", "Noir", "Obscurité", "Chaleur"], correct: "Obscurité" },
            { question: "Que signifie 'Odeur'?", options: ["Saveur", "Parfum", "Bruit", "Couleur"], correct: "Parfum" },
            { question: "Que signifie 'Tendre'?", options: ["Doux", "Dur", "Brutal", "Sec"], correct: "Doux" },
            { question: "Que signifie 'Brûler'?", options: ["Éteindre", "Enflammer", "Froid", "Chauffer"], correct: "Enflammer" },
            { question: "Que signifie 'Neige'?", options: ["Eau", "Pluie", "Glace", "Blanc"], correct: "Blanc" },
            { question: "Que signifie 'Oiseau'?", options: ["Poisson", "Animal volant", "Chien", "Chat"], correct: "Animal volant" },
            { question: "Que signifie 'Mer'?", options: ["Rivière", "Océan", "Lac", "Montagne"], correct: "Océan" },
            { question: "Que signifie 'Vent'?", options: ["Pluie", "Souffle d'air", "Chaleur", "Orage"], correct: "Souffle d'air" }
        ],
};
       
let selectedLanguage = "";
let usedQuestions = new Set();
let questionsList = [];

document.getElementById("languageSelect").addEventListener("change", function() {
    selectedLanguage = this.value;
    document.getElementById("startQuizBtn").disabled = false;
});

function startQuiz() {
    if (!selectedLanguage) {
        alert("Please select a language to start the quiz!");
        return;
    }

    document.getElementById("languageSelection").style.display = "none";
    document.getElementById("quizSection").classList.remove("hidden");

    questionsList = [...quizData[selectedLanguage]];
    usedQuestions.clear();

    nextQuestion();
}

function nextQuestion() {
    if (usedQuestions.size === questionsList.length) {
        usedQuestions.clear(); // Reset to keep going infinitely
    }

    let currentQuestion;
    do {
        currentQuestion = questionsList[Math.floor(Math.random() * questionsList.length)];
    } while (usedQuestions.has(currentQuestion.question));

    usedQuestions.add(currentQuestion.question);

    document.getElementById("question").innerText = currentQuestion.question;
    let options = document.querySelectorAll(".quiz-option");
    let shuffledOptions = currentQuestion.options.sort(() => Math.random() - 0.5);

    for (let i = 0; i < options.length; i++) {
        options[i].innerText = shuffledOptions[i];
        options[i].style.display = "block";
        options[i].disabled = false;
    }

    document.getElementById("result").innerText = "";
    document.getElementById("nextBtn").classList.add("hidden");
    document.getElementById("tryAgainBtn").classList.add("hidden");
}

function checkAnswer(button) {
    let selectedAnswer = button.innerText;
    let correctAnswer = questionsList.find(q => q.question === document.getElementById("question").innerText).correct;

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

function retryQuestion() {
    document.getElementById("result").innerText = "";
    document.getElementById("tryAgainBtn").classList.add("hidden");
}
