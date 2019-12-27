import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Run',
        completed: false
      },
      {
        id: 2,
        title: 'Walking',
        completed: false
      },
      {
        id: 3,
        title: 'Swim',
        completed: false
      }
    ]
  }

  // Toggle checkbox
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

// Delete Todos
delTodo = (id) => {
  this.setState({ todos: [
    ...this.state.todos.filter(todo => todo.id !== id)
  ]})
}

render(){
  // console.log(this.state.todos);
  return (
    <div className="App">
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
    </div>
  );
}
  
}

export default App;
