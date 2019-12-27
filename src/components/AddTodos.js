import React, { Component } from "react";

export class AddTodos extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }


  render() {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add to do . . ."
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddTodos;
