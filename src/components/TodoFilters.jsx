import { memo } from "react";
import { useTodo } from "../context/TodoContext";

// Definição estática dos filtros: fora do componente para não recriar a cada render
const FILTERS = [
    { key: 'all', label: 'Todas' },
    { key: 'pending', label: 'Pendentes' },
    { key: 'completed', label: 'Concluídas' },
]

// Botões para alterar o filtro ativo
const TodoFilters = memo(function TodoFilters() {
    const { filter, setFilter } =  useTodo()

    return (
        <div className="filters" role="group" aria-label="Filtros de tarefa">
            {FILTERS.map(({ key,label }) => (
                <button
                    key={key}
                    className={`filter-btn ${filter === key ? 'active' : ''}`}
                    onClick={() => setFilter(key)}
                    aria-label={`Filtrar por ${label}`}
                >
                    {label}
                </button>    
            ))}
        </div>
    );
});

export default TodoFilters;