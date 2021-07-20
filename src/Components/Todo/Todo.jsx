import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classNames from "classnames";
const titleCSS = classNames("text-red-600", "text-5xl")

export default class Todo extends React.Component {
  state = {
    todos: [],
    todoInput: "",
    validationMessage: "",
  };

  handleInputChange = ({target}) => {
    this.setState({ todoInput: target.value });
  };
  
  
  handleAddTodo = ()=>{
    this.setState(({ todos, todoInput }) => ({
      todos: [...todos, todoItem(todoInput)],
      todoInput: "",
    }))
  }

  render() {
    return (
      <>
        <h1 className={titleCSS}>ToDo</h1>
        <div className={"flex-row"}>
        <Input
          type="text"
          placeholder="Enter text"
          onChange={this.handleInputChange}
        />
        <Button text="Add" disabled={!this.state.todoInput} onClick={this.handleAddTodo}/>
        </div>
        {this.state.todos}
      </>
    );
  }
}



function todoItem(text){
  return <p>{text}</p>
}