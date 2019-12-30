import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import Header from "./components/layout/Header";
import uuid from "uuid";
import About from "./components/pages/About";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  // Toggle checkbox
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todos
  delTodo = (id) => {

    // this is static way
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });

    // this is with HTTP request
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id
      )]
    }))
  };

  // Add Todos
  addTodo = (title) => {
    // THIS IS STATIC WAY
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // };
    // this.setState({
    //   todos: [...this.state.todos, newTodo]
    // });

    // THIS IS WITH HTTP
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    }).then(res => 
      this.setState({ todos:
      [...this.state.todos, res.data] }));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodos addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
