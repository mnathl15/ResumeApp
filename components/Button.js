import cn from "classnames";

export default function Button({ text, onClick, width }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        width,
        "h-12 min-h-12 mx-auto rounded bg-blue-300 hover:bg-blue-500 active:bg-blue-700 outline-none"
      )}
    >
      <span> {text}</span>
    </button>
  );
}
