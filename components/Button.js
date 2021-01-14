export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-4/5 h-12 mx-auto rounded bg-blue-300 hover:bg-blue-500 active:bg-blue-700 outline-none"
    >
      <span> {text}</span>
    </button>
  );
}
