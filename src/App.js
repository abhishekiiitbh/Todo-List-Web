import React, { Component } from "react";
//adding the routing configuration
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Importing bootstrap css file
import "bootstrap/dist/css/bootstrap.min.css";
/*
Feteching createtodo , edittodo and todoslost from components folder
*/
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";


class App extends Component {
  //Rendering our webpage
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            
              <img src="https://lh3.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc" width="50" height="50" alt="TODO logo" />
            
            <Link to="/" className="navbar-brand"> Todo List Web App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;