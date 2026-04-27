import { memo } from 'react'
import { useTodo } from '../context/TodoContext'
import TodoItem from './TodoItem'

const TodoList = memo(function TodoList() {
    const { filteredTodos, filter, stats } = useTodo();

    // Mensagens e ícones para o stat vazio, por filtro
    const emptyMessages = {
            all: { icon: '✦', title: 'Nenhuma tarefa ainda', sub: 'Adicione sua primeira tarefa acima.' },
            pending: { icon: '○', title: 'Tudo em dia', sub: 'Nenhuma tarefa pendente. Ótimo trabalho.' },
            completed: { icon: '◇', title: 'Nada concluido', sub: 'Complete uma tarefa para vê-la aqui.' },

    }

    const empty = emptyMessages[filter];

    return (
        <div className='card todo-list-section'>
            <div className='todo-list-header'>
                <span className='todo-list-title'>Tarefas</span>
                <span className='todo-count-badge'>{filteredTodos.length}</span>
            </div>

            {filteredTodos.length === 0 ? (
                <div className='empty-state'>
                    <span className='empty-icon'>{empty.icon}</span>
                    <p className='empty-title'>{empty.title}</p>
                    <p className='empty-sub'>{empty.sub}</p>
                </div>   
            ) : (
                <ul className='todo-list'>
                    {filteredTodos.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            )}
        </div>
    );
});

export default TodoList;