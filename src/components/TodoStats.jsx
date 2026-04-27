import { memo } from "react";
import { useTodo } from "../context/TodoContext";

// Exibe os números gerais da lista (total, concluídas, pendentes) e uma barra de progresso
const TodoStats = memo(function TodoStats() {
    const { stats } = useTodo();

    return  (
        <div className="stats">
            <div className="stat-item">
                <span className="stat-value accent">{stats.total}</span>
                <span className="stat-label">Total</span>
            </div>

            <div className="stat-item">
                <span className="stat-value green">{stats.completed}</span>
                <span className="stat-label">Feitas</span>
                <div className="progress-bar-wrap">
                    <div 
                        className="progress-bar-fill"
                        style={{width: `${stats.progress}%`}}
                        role="progressbar"
                        aria-valuenow={stats.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    />    
                </div>
            </div>

            <div className="stat-item">
                <span className="stat-value">{stats.pending}</span>
                <span className="stat-label">Pendentes</span>
            </div>
        </div>
    );
});

export default TodoStats;