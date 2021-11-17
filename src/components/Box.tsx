import React, { useState } from 'react';

interface BoxProps {
    clickColor: string;
    historyCallback: (args: unknown) => void;
}

const Box = ({ clickColor, historyCallback }: BoxProps): JSX.Element => {
  const [boxColor, setBoxColor] = useState('#FFFFFF');

  const handleColorBox = (): void => {
    historyCallback(boxColor); // actually pass something elseful here instead
    setBoxColor(clickColor);
  };

  return (
    <div
      className="box"
      onClick={handleColorBox}
      style={{ backgroundColor: boxColor }}
    ></div>
  );
};

export default Box;
