import { createContext, useContext, useCallback, useMemo} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Contexto
const TodoContext = createContext(null);

// Provider: envolve a app e distribui o estado
export function TodoProvider({children}) {
    // Estado em localStorage via hook customizado
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [filter, setFilter] = useLocalStorage('filter', 'all');

    // Adicionar tarefa
    const addTodo = useCallback((text) => {
        const trimmed = text.trim();
        if (!trimmed) return;
 
        setTodos((prev) => [
        {
            id: crypto.randomUUID(),  // ID único nativo do browser
            text: trimmed,
            completed: false,
            createdAt: Date.now(),
        },
        ...prev,
        ]);
    }, [setTodos]);
 
    // Alternar concluída/pendente
    const toggleTodo = useCallback((id) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }, [setTodos]);

    // Remover tarefa
    const removeTodo = useCallback((id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, [setTodos]);

    // Lista filtrada: só recalcula quanto todos ou filter  mudam
    const filteredTodos = useMemo(() => {
        switch (filter) {
            case 'completed': return todos.filter((t) => t.completed);
            case 'pending': return todos.filter((t) => !t.completed);
            default: return todos;
        }
    }, [todos, filter]);

    // Estatísticas memoizadas
    const stats = useMemo(() => ({
        total: todos.length,
        completed: todos.filter((t) => t.completed).length,
        pending: todos.filter((t) => !t.completed).length,
        progress: todos.length === 0 ? 0 : Math.round (
            (todos.filter((t) => t.completed).length / todos.length) * 100
        ),
    }), [todos]);

    // Valor exposto para toda árvore
    const value = useMemo(() => ({
        todos,
        filteredTodos,
        filter,
        setFilter,
        addTodo,
        toggleTodo,
        removeTodo,
        stats,
    }), [todos, filteredTodos, filter, setFilter, addTodo, toggleTodo, removeTodo, stats])

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}

// Hook de acesso 
export function useTodo() {
  const ctx = useContext(TodoContext)
  if (!ctx) throw new Error('useTodo deve ser usado dentro de <TodoProvider>')
  return ctx
}
