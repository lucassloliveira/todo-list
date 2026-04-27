import { TodoProvider } from "./context/TodoContext";
import TodoStats from "./components/TodoStats";
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

export default function App() {
  return(
    <TodoProvider>
      <main className="app">
        <div className="app-inner">

          {/* Header */}
          <header className="header">
            <span className="header-eyebrow">React Avançado</span>
            <h1 className="header-title">
              Minhas<br /><span>Tarefas</span>
            </h1>
            <p className="header-sub">
              Hooks · Context API · Memoization · localStorage
            </p>
          </header>

          {/* Estatísticas */}
          <TodoStats />

          {/* Formulário */}
          <TodoForm />

          {/* Filtros = lista */}
          <div className="card">
            <TodoFilters />
          </div>

          <TodoList />

          {/* Footer */}
          <footer className="footer">
            todo-react-avancado · feito com React 18
          </footer>

        </div>
      </main>
    </TodoProvider>
  );
}