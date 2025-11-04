import "./index.css";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-blue-400 tracking-wide">
        Tic Tac Toe
      </h1>
      <Game />
    </div>
  );
}
