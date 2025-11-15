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
  onToggle: (id: number) => void; // ⭐ Läggs till för att toggla done
};

// 3. Själva komponenten
function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <li onClick={() => onToggle(todo.id)}>
      {" "}
      {/* ⭐ Klicka för att toggla */}
      <span>{todo.title}</span>
      {todo.done && <span className="done">Done</span>}
    </li>
  );
}

export default TodoItem;
