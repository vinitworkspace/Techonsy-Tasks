import { useState } from "react";
import Board from "./Board";
import calculateWinner from "../utils/calculateWinner";

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const winner = calculateWinner(squares);
  const isDraw = squares.every((sq) => sq !== null) && !winner;

  function handleClick(i) {
    const next = squares.slice();
    if (next[i] || winner) return;
    next[i] = xIsNext ? "X" : "O";
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  function startGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(true);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(false);
  }

  return (
    <div className="flex flex-col items-center">
      {!gameStarted ? (
        <button
          onClick={startGame}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold transition-transform duration-200 hover:scale-105"
        >
          Start Game
        </button>
      ) : (
        <>
          <Board squares={squares} onSquareClick={handleClick} />
          <div className="mt-6 text-xl font-semibold text-white">
            {winner
              ? `Hooray! ${winner} Wins 🎉`
              : isDraw
              ? "It's a Draw 🤝"
              : `Next Player: ${xIsNext ? "X" : "O"}`}
          </div>
          <button
            onClick={resetGame}
            className="mt-4 px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-lg font-medium transition-transform duration-200 hover:scale-105"
          >
            Reset Game
          </button>
        </>
      )}
    </div>
  );
}
