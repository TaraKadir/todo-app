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
};

// 3. Själva komponenten
function TodoItem({ todo }: TodoItemProps) {
  return (
    <li>
      <span>{todo.title}</span>
      {todo.done && <span className="done">Done</span>}
    </li>
  );
}

export default TodoItem;
