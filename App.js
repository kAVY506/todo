import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/add" component={AddTodo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
