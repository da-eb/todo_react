import React from 'react';
import "./styles.css";

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do Laundry", done: false },
    { id: 3, text: "Clean Room", done: false }
  ]);
  return (
    <div className="App">
      <h1>Todo List </h1>
      <ul>
        <TodoList todos={todos} />
        <AddTodo setTodos={setTodos} />
      </ul>
    </div>
  );
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({setTodos}) {
  function handleAddTodo(event) {
    event.preventDefault();
    const text = event.target.elements.addTodo.value;
    const todo = {
      id: 4,
      text,
      done: false,
    };
    setTodos()
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" />
      <button type="submit">Submit</button>
    </form>
  );
}
