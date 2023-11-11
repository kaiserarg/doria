import React, { useState } from 'react';

//make a state variable of a array/list that keeps track of all the previously guessed words
//add a validiton inside handleguesssubmit() to make sure that the word isnt guessed twice from the list
const AnagramsGame = () => {
  const [letters, setLetters] = useState(generateRandomLetters(8));
  const [currentGuess, setCurrentGuess] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0); 

  //checks for valid ana and also word len
  const isAnagram = (word, originalLetters) => {
    if (word.length < 3){
        return false
    }
    let tempLetters = originalLetters.toLowerCase();
    for (let char of word.toLowerCase()) {
      if (!tempLetters.includes(char)) {
        return false;
      }
      tempLetters = tempLetters.replace(char, '');
    }
    return tempLetters.length === originalLetters.length - word.length;
  };
  

  const handleGuessSubmit = async () => {
    setShowFeedback(false);
  
    if (isAnagram(currentGuess, letters)) {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuess}`);
        if (response.ok) {
          setScore(score + 1);
          setFeedbackMessage('Correct!');
        } else {
          setFeedbackMessage('Valid anagram, but not a recognized word.');
        }
      } catch (error) {
        console.error('Error validating word:', error);
        setFeedbackMessage('Error occurred during word validation.');
      }
    } else {
      setFeedbackMessage('Invalid anagram. Try again!');
    }
  
    setCurrentGuess('');
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };
  
  return (
    <div>
      <h1>Anagrams Game</h1>
      <div>{letters}</div>
      <input 
        type="text" 
        value={currentGuess} 
        onChange={(e) => setCurrentGuess(e.target.value)}
        className="w-full p-2 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
      />
      <button onClick={handleGuessSubmit}>Submit</button>
      {showFeedback && <p>{feedbackMessage}</p>}
      {<div>{score}</div>}
    </div>
  );
};

//zhifeng improve this
//make sure that generates at least one vowel
//make sure that there are at least 3 valid anagrams (optional)
//valid anagram functions on top
//if u wanna make it look nice you can do this
const generateRandomLetters = (count) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomLetters = '';
  for (let i = 0; i < count; i++) {
    randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomLetters;
};

export default AnagramsGame;