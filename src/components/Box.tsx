import React, { useState } from 'react';

interface BoxProps {
    clickColor: string;
}

const Box = ({ clickColor }: BoxProps): JSX.Element => {
  const [boxColor, setBoxColor] = useState('#FFFFFF');

  const handleColorBox = (newColor: string): void => {
    // make box change color
    setBoxColor(newColor);
  };

  return (
    <div
      className="box"
      onClick={() => handleColorBox(clickColor)}
      style={{ backgroundColor: boxColor }}
    ></div>
  );
};

export default Box;
