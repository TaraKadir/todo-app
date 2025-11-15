// src/App.tsx
import { useState } from "react";
import TodoItem from "./components/TodoItem";
import type { Todo } from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Lära mig TypeScript", done: false },
    { id: 2, title: "Bygga todo-app med React", done: true },
  ]);

  function handleAddTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      done: false,
    };

    setTodos((previousTodos) => [...previousTodos, newTodo]);
  }

  return (
    <div>
      <h1>Min första React + TypeScript-app</h1>

      <TodoInput onAddTodo={handleAddTodo} />

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
