import { useState } from "react";
import TodoItem, { type Todo } from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Lära mig TypeScript", done: false },
    { id: 2, title: "Bygga todo-app med React", done: true },
  ]);

  function toggleTodo(id: number) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  return (
    <div>
      <h1>Min första React + TypeScript-app</h1>
      <ul>
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
