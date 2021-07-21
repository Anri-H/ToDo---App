import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default class List extends React.Component {
  state = {};

  render() {
    const { todos, deleteItem, complete, edit, saveEdit, editTodo } =
      this.props;

    return (
      <ul>
        {todos.map(({ text, id, isComplete, isEdit }) => {
          const style = classNames(
            "border",
            "border-solid",
            "border-red-600",
            "bg-gray-600",
            "m-4",
            "w-96",
            // "max-w-max",
            "text-left",
            "cursor-pointer",
            { "line-through": isComplete }
          );
          return (
            <li id={id} className={style}>
              {isEdit ? (
                <>
                  <Button text="save" onClick={saveEdit(id)} />
                  <Input type="text" onChange={editTodo} />
                </>
              ) : (
                <>
                  <Button text="Delete" onClick={deleteItem(id)} />
                  <span
                    className={"ml-4"}
                    onClick={complete(id)}
                    onDoubleClick={edit(id)}
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
}
