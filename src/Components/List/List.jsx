import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default function List({
  items,
  editedTodo,
  deleteItem,
  complete,
  edit,
  saveEdit,
  editTodo,
}) {
  return (
    <ul>
      {items.map(({ text, id, isComplete, isEdit }) => {
        const style = classNames(
          "bg-gray-600",
          "m-4",
          "w-96",
          "text-left",
          "cursor-pointer",
          { "line-through": isComplete }
        );
        return (
          <li id={id} className={style}>
            {isEdit ? (
              <>
                <Button text="Save" onClick={saveEdit(id)} />
                <Input type="text" value={editedTodo} onChange={editTodo} />
              </>
            ) : (
              <>
                <Button text="Delete" onClick={deleteItem(id)} />
                <span
                  className={"ml-4"}
                  onClick={complete(id)}
                  onDoubleClick={edit(id, text)}
                >
                  {text}
                </span>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
