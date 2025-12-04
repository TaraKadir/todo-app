//Test ändring redovisning
//Test ändring demo
// src/App.tsx
import "./App.css";
import { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

const DEFAULT_TODOS: Todo[] = [];

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem("todos");

    if (!stored) {
      return DEFAULT_TODOS;
    }

    try {
      return JSON.parse(stored) as Todo[];
    } catch {
      return DEFAULT_TODOS;
    }
  });

  function handleAddTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      done: false,
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
  }

  function handleToggleTodo(id: number) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleDeleteTodo(id: number) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <h1>Mina todos</h1>

      <TodoInput onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
