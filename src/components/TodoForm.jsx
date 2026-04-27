import { memo } from "react";
import { useTodo } from "../context/TodoContext";
import useInput from "../hooks/useInput";

const TodoForm = memo(function TodoForm() {
    const { addTodo } = useTodo();
    const { value, onChange, reset, isEmpty } = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEmpty) return;
        addTodo(value);
        reset();
    }

    const handleKeyDown = (e) => {
        // Submit ao apertar enter
        if (e.key === 'Enter') handleSubmit(e);
    }

    return (
        <form className="card todo-form" onSubmit={handleSubmit} noValidate>
            <div className="todo-input-wrap">
                <span className="todo-input-icon" aria-hidden="true">+</span>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Adicionar nova tarefa..."
                    value={value}
                    onChange={onChange}
                    autoFocus
                    aria-label="Nova tarefa"
                    maxLength={200}
                />    
            </div>

            <button
                type="submit"
                className="btn btn-primary"
                disabled={isEmpty}
                aria-label="Adicionar tarefa"
            >
                Adicionar    
            </button>    
        </form>
    );
})

export default TodoForm