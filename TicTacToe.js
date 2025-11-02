import React, { useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayer1Next, setIsPlayer1Next] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; // stop if filled or someone won
    const newBoard = [...board];
    newBoard[index] = isPlayer1Next ? "Player 1" : "Player 2";
    setBoard(newBoard);
    setIsPlayer1Next(!isPlayer1Next);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsPlayer1Next(true);
  };

  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        {board.map((value, index) …
[11:06, 2/11/2025] Akhila: import React, { useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayer1Next, setIsPlayer1Next] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return; // stop if filled or someone won
    const newBoard = [...board];
    newBoard[index] = isPlayer1Next ? "Player 1" : "Player 2";
    setBoard(newBoard);
    setIsPlayer1Next(!isPlayer1Next);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsPlayer1Next(true);
  };

  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <div className="board">
        {board.map((value, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {value === "Player 1"
              ? "X"
              : value === "Player 2"
              ? "O"
              : ""}
          </button>
        ))}
      </div>

      <h3 style={{ color: winner ? "green" : "black" }}>
        {winner
          ? 🏆 Winner: ${winner}
          : Next Turn: ${isPlayer1Next ? "Player 1 (X)" : "Player 2 (O)"}}
      </h3>

      <button className="reset" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]; // returns "Player 1" or "Player 2"
    }
  }
  return null;
}
