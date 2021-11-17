import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App(): JSX.Element {
  const [activeColor, setActiveColor] = useState('#FFFFFF');
  const [history, setHistory] = useState<unknown[]>([]);

  const handleClickHistory = (newStuff: unknown) => {
    setHistory([...history, newStuff])
  }

  return (
    <div className="App">
      <Box historyCallback={handleClickHistory} clickColor={activeColor} />
      <Box historyCallback={handleClickHistory} clickColor={activeColor} />
      <Box historyCallback={handleClickHistory} clickColor={activeColor} />
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setActiveColor(e.target.value)}
      />
    </div>
  );
}

export default App;
