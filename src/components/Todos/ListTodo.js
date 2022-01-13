import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import {toast} from 'react-toastify';

class ListTodo extends React.Component {
  state = {
    listTodos: [
      {id: 'todo1', content: 'Doing homework'},
      {id: 'todo2', content: 'Making Video'},
      {id: 'todo3', content: 'Doing homework'}
    ],
    editTodo: {}
  }

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    })
    toast.success("Added Success")
  }

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter(item => item.id !== todo.id)
    this.setState({
      listTodos: currentTodos
    })
    toast.success('Delete Success')
  }

  handleEditTodo = (todo) => {
    let {editTodo, listTodos} = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObject === false && editTodo.id === todo.id) {
      let listTodosCopy = [...listTodos];
      let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
      listTodosCopy[objIndex].content = editTodo.content;
      this.setState({
        listTodos: listTodosCopy,
        editTodo: {}
      })
      toast.success('Update Success')
      return;
    }

    //edit
    this.setState({
      editTodo: todo
    })
  }

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = {...this.state.editTodo};
    editTodoCopy.content = event.target.value;
    this.setState({
      editTodo: editTodoCopy
    })

  }
  render(){
    let {listTodos, editTodo} = this.state;
    let isEmptyObject = Object.keys(editTodo).length === 0; 
    return(
      <div className='list-todo-container'>
        <AddTodo 
          addNewTodo={this.addNewTodo}
        />
        <div className='list-todo-content'>
          {listTodos && listTodos.length > 0 && 
            listTodos.map((item, index) => {
              return (
                <div className='todo-child' key={item.id}> 
                {isEmptyObject === true ?    
                  <span>{index + 1}. {item.content}</span>
                  : 
                  <>
                    {editTodo.id === item.id ?
                      <span>
                        {index + 1}. <input value ={editTodo.content}
                        onChange={(event) => this.handleOnChangeEditTodo(event)}
                        />
                      </span>
                      :
                      <span>
                        {index + 1}. {item.content}
                      </span>
                    }
                  </>
                  } 
                  <button className='edit'
                    onClick={() => this.handleEditTodo(item)}
                  >
                    {isEmptyObject === false && editTodo.id === item.id ?
                  'Save' : 'Edit'  
                  }
                  </button>
                  <button className='delete'
                    onClick={() => this.handleDeleteTodo(item)}
                  >Delete</button>
                </div>
              )
            })
            }
        </div>
      </div>
      )
    }
  }

export default ListTodo;