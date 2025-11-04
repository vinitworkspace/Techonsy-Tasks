export default function Square({ value, onClick }) {
  return (
    <button
      className="w-24 h-24 text-5xl font-bold border-2 border-gray-700 rounded-lg bg-gray-100 hover:bg-blue-100 transition-all duration-200"
      onClick={onClick}
    >
      <span
        className={`text-5xl font-bold ${
          value === "X"
            ? "text-blue-500"
            : value === "O"
            ? "text-red-500"
            : ""
        }`}
      >
        {value}
      </span>
    </button>
  );
}
