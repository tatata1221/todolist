import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component{
  state = {
    content: ''
  }

  handleOnChangeContent = (event) =>{
    this.setState({
      content: event.target.value
    })
  }

  handleAddTodo = () => {
    if(!this.state.content){
      toast.error('Invalid Input')
      return;
      //(undefined/null/empty) => false
    }
    let todo = {
      id: Math.floor(Math.random()* 1000),
      content: this.state.content
    }
    this.props.addNewTodo(todo);
    this.setState({
      content:''
    })
  }

  render(){
    let {content} = this.state;
    return(
      <div className='add-todo'>
      <input type='text' value={content}
        onChange={(event) => this.handleOnChangeContent(event)}
      />
      <button type ='button' className='add'
        onClick={()=>this.handleAddTodo()}
      >Add</button>
    </div>
    )
  }
}

export default AddTodo;
