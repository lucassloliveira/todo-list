import { memo } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = memo(function TodoItem({todo}) {
    const { toggleTodo, removeTodo } = useTodo();

    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            {/* checkbox customizado */}
            <button
                className={`todo-checkbox ${todo.completed ? 'checked' : ''}`}
                onClick={() => toggleTodo(todo.id)}
                aria-checked={todo.completed}
                role="checkbox"
                aria-label={`Marcar "${todo.text}" como ${todo.completed ? 'pendente' : 'concluída'}`}
            >
                {todo.completed && <span className="check-icon">✓</span>}
            </button>    

            {/* texto da tarefa */}
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </span>

            {/* botão de remove */}
            <button
                className="todo-delete"
                onClick={() => removeTodo(todo.id)}
                aria-label={`Remover tarefa "${todo.text}"`}
                title="Remover"
            >
              ✕  
            </button>    
        </li>
    );
});

export default TodoItem