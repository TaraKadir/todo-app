// src/components/TodoInput.tsx
import { useState } from "react";
import type { FormEvent } from "react";

type TodoInputProps = {
  onAddTodo: (title: string) => void;
};

function TodoInput({ onAddTodo }: TodoInputProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const trimmed = title.trim();
    if (!trimmed) return;

    onAddTodo(trimmed);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Lägg till en todo…"
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default TodoInput;
