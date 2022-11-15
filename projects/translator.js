/*
Program that shows 10 english words to the user, and from their input finds the value in map by using the key.
*/
let tenWords = new Map();
tenWords.set('Hello', 'Hola');
tenWords.set('Strong', 'Fuerte');
tenWords.set('Smart', 'Inteligente');
tenWords.set('Cool', 'Frio');
tenWords.set('Music', 'Musica');
tenWords.set('Dance', 'Baile');
tenWords.set('Sing', 'Cantar');
tenWords.set('Move', 'Muevete');
tenWords.set('Travel', 'Viajar');
tenWords.set('House', 'Casa');

let wordList =[];

for (let theKey of tenWords.keys()) { 
    wordList.push(theKey)
}

let word = prompt('Please select a word from below to translate to spanish\n',wordList)
let translatedWord = tenWords.get(word);
console.log('English word:', word, '... Spanish translation:',translatedWord);
