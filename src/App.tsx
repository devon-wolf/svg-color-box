import React, { useState } from 'react';
import './App.css';
import Box from './components/Box';

function App(): JSX.Element {
  const [activeColor, setActiveColor] = useState('#FFFFFF');
  return (
    <div className="App">
      <Box clickColor={activeColor} />
      <Box clickColor={activeColor} />
      <Box clickColor={activeColor} />
      <input
        type="color"
        value={activeColor}
        onChange={(e) => setActiveColor(e.target.value)}
      />
    </div>
  );
}

export default App;
