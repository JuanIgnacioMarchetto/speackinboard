import React, { useState } from 'react';
import './App.css';

const qwertyKeys = "QWERTYUIOPASDFGHJKLZXCVBNM";

function App() {
  const [inputValue, setInputValue] = useState('');

  const renderKeys = () => {
    return qwertyKeys.split("").map((letter) => (
      <button key={letter} onClick={() => updateText(letter)}>
        {letter}
      </button>
    ));
  };

  const updateText = (letter) => {
    setInputValue((prevValue) => prevValue + letter);
    decir(letter);
  };

  const decir = (text) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  };

  const clearInput = () => {
    setInputValue('');
  };

  const speakWholeWord = () => {
    decir(inputValue);
  };

  return (
    <div className="App">
      <input
        type="text"
        id="input"
        placeholder="Asi se dice:..."
        className="bobhabla"
        value={inputValue}
        readOnly
      />
      <div id="keyboard" className="keyboard">
        {renderKeys()}
      </div>
      <button type="button" id="hablar" onClick={speakWholeWord} className="boton">
        <img src="./SpongeBob_SquarePants_character.svg.png" alt="" />
      </button>
      <input
        type="button"
        id="delete"
        value="Borrar"
        className="borrar"
        onClick={clearInput}
      />
    </div>
  );
}

export default App;
