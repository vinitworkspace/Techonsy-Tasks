import Square from "./Square";

export default function Board({ squares, onSquareClick }) {
  function renderSquare(i) {
    return <Square key={i} value={squares[i]} onClick={() => onSquareClick(i)} />;
  }

  return (
    <div className="flex flex-col gap-2 text-black font-semibold">
      {[0, 1, 2].map((row) => (
        <div className="flex gap-2" key={row}>
          {renderSquare(row * 3)}
          {renderSquare(row * 3 + 1)}
          {renderSquare(row * 3 + 2)}
        </div>
      ))}
    </div>
  );
}
