import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setboard] = useState(Array(9).fill(null));

  const handleSquareClick = () => {
    setboard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return 'X';
        }

        return square;
      });
    });
  };

  const renderSquare = position => {
    returt(
      <Square value={board(position)} onClick={() => handleSquareClick} />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
