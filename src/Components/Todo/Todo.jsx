import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classNames from "classnames";
import List from "../List/List";
const titleCSS = classNames("text-red-600", "text-5xl")

export default class Todo extends React.Component {
  state = {
    todos: [],
    todoInput: "",
    validationMessage: "",
  };

  handleDelete = (val) => (e)=> {
    e.stopPropagation()
    console.log("delete");
    this.setState(({todos})=>({todos: todos.filter(({id}) => id !== val)}))
  };

  handleEdit = (id) => (e)=>{
    e.stopPropagation();
    this.setState(({todos})=>({
      todos: todos.map(item=> item.id===id ? {...item, isEdit: !item.isEdit} : item
      )
    }))
  }

  handleSaveEdit = (id) => (text)=>{
    this.setState(({todos})=>({
      todos: todos.map(item=> item.id===id ? {...item, text: text} : item
      )
    }))
  }

  handleComplete = (id)=>(e)=>{
    e.stopPropagation()
    this.setState(({todos})=>({
      todos: todos.map(item=> item.id===id ? {...item, isComplete: !item.isComplete} : item
      )
    }))
  }

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
    const {todoInput, todos} = this.state;
    return (
      <>
        <h1 className={titleCSS}>ToDo</h1>
        <div className={"flex-row"}>
        <Input
          type="text"
          placeholder="Enter text"
          value={todoInput}
          onChange={this.handleInputChange}
        />
        <Button text="Add" disabled={!todoInput} onClick={this.handleAddTodo}/>
        </div>
        <List todos={todos} complete={this.handleComplete} edit={this.handleEdit} saveEdit={this.handleSaveEdit}  deleteItem={this.handleDelete}/>
      </>
    );
  }
}


let id = 0;
function todoItem(text){
  return {text: text,
  id: id++}
}