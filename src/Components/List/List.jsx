import React from "react";
import classNames from "classnames";
import Button from "../Button/Button";
import Input from "../Input/Input";

export default class List extends React.Component {
  state = {};

  editTodo = ({ target }) => {
    this.setState({ editedTodo: target.value });
  };

  render() {
    const { todos, deleteItem, complete, edit, saveEdit } = this.props;

    return (
      <ul>
        {todos.map(({ text, id, isComplete, isEdit }) => {
          const style = classNames(
            "border",
            "border-solid",
            "border-red-600",
            "bg-gray-600",
            "w-96",
            "h-14",
            "m-4",
            "text-left",
            "cursor-pointer",
            { "line-through": isComplete }
          );
          return (
            <li id={id} className={style}>
              <Button text="Edit" onClick={edit(id)} />
              <Button text="Delete" onClick={deleteItem(id)} />

              <span className={"m-4"} onClick={complete(id)}>
                {isEdit ? (
                  <>
                    {" "}
                    <Input type="text" onChange={this.editTodo} />
                    <Button
                      text="save"
                      onClick={saveEdit(id, this.state.editedTodo)}
                    />{" "}
                  </>
                ) : (
                  text
                )}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }
}
