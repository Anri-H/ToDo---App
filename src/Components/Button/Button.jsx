import classNames from "classnames";
const style = classNames("bg-red-600", "p-3");

export default function Button({ text, onClick, type, disabled }) {
  return (
    <button className={style} disabled={disabled} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
