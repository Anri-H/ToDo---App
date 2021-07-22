import React from "react";
import classNames from "classnames";

const style = classNames(
  "bg-gray-600",  
  "outline-none",
  "p-2",
  "text-red-600",
  "bg-transparent"
  // "w-96"
);

export default function Input({
  type,
  name,
  placeholder,
  onClick,
  value,
  onChange,
}) {
  return (
    <input
      className={style}
      type={type}
      name={name}
      placeholder={placeholder}
      onClick={onClick}
      value={value}
      onChange={onChange}
    />
  );
}
