import classNames from "classnames";
const style = classNames("bg-red-600","hover:bg-red-800", "max-w-md","mx-auto", "p-2");

export default function Button({ text, onClick, type, disabled }) {
  return (
    <button className={style} disabled={disabled} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
