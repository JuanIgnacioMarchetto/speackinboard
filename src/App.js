import React, { useState } from 'react';
import './App.css'; 

const qwertyKeysEn = "QWERTYUIOPASDFGHJKLZXCVBNM";
const qwertyKeysEs = "QWERTYUIOPASDFGHJKLZXCVBNM";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const renderKeys = () => {
    const qwertyKeys = selectedLanguage === 'en' ? qwertyKeysEn : qwertyKeysEs;
    
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
    const lang = selectedLanguage === 'en' ? 'en-US' : 'es-ES';
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  };

  const clearInput = () => {
    setInputValue('');
  };

  const speakWholeWord = () => {
    decir(inputValue);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="App">
    
      <input
        type="text"
        id="input"
        placeholder="Speack:..."
        className="bobhabla"
        value={inputValue}
        readOnly
      />
      <div id="keyboard" className="keyboard">
        {renderKeys()}
      </div>
      <button type="button" id="hablar" onClick={speakWholeWord} className="boton">
        <img src="data:image/jpeg;base64,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" alt="" />
      </button>
      <input
        type="button"
        id="delete"
        value="Delete"
        className="borrar"
        onClick={clearInput}
      />
    </div>
  );
}

export default App;
