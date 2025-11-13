import TodoItem, { type Todo } from "./components/TodoItem";

function App() {
  const todos: Todo[] = [
    { id: 1, title: "Lära mig TypeScript", done: false },
    { id: 2, title: "Bygga todo-app med React", done: true },
  ];

  return (
    <div>
      <h1>Min första React + TypeScript-app</h1>
      <ul>
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
    </div>
  );
}

export default App;
