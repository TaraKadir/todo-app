import "./TodoItem.css";

// 1. Interface för en todo
export interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// 2. Props-typ för komponenten
type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

// 3. Själva komponenten
function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <span onClick={() => onToggle(todo.id)}>{todo.title}</span>

      {todo.done && <span className="done">Done</span>}

      <button onClick={() => onDelete(todo.id)}>Ta bort</button>
    </li>
  );
}

export default TodoItem;
