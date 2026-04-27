# ✅ Todo List — React Avançado

![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)

Aplicação de lista de tarefas desenvolvida com recursos avançados do React, focando em organização, reuso de lógica e performance.

---

## 🚀 Tecnologias utilizadas

- **React 18** — biblioteca principal de UI
- **Vite** — bundler e servidor de desenvolvimento
- **Context API** — gerenciamento de estado global
- **Hooks customizados** — encapsulamento de lógica reutilizável
- **localStorage** — persistência de dados no navegador
- **CSS puro** — estilização com design tokens e variáveis CSS

---

## ✨ Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como concluídas
- Remover tarefas da lista
- Filtrar tarefas por: **Todas**, **Pendentes** e **Concluídas**
- Estatísticas em tempo real (total, feitas, pendentes e progresso)
- Dados persistidos no `localStorage` — as tarefas continuam salvas ao recarregar a página

---

## 🧠 Conceitos aplicados

| Conceito | Onde foi aplicado |
|---|---|
| `useState` | Gerenciamento de estado dentro dos hooks customizados |
| `useEffect` | Persistência automática no `localStorage` |
| `useContext` | Acesso ao estado global em todos os componentes |
| `useCallback` | Memoização de funções para evitar recriações desnecessárias |
| `useMemo` | Memoização da lista filtrada e das estatísticas |
| `React.memo` | Prevenção de re-renders em componentes filhos |
| Hook customizado `useLocalStorage` | Encapsula leitura e escrita no `localStorage` |
| Hook customizado `useInput` | Encapsula controle de campo de input |
| Context API | `TodoProvider` distribui estado e ações para toda a árvore |

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── TodoFilters.jsx   # Botões de filtro (Todas, Pendentes, Concluídas)
│   ├── TodoForm.jsx      # Formulário para adicionar tarefas
│   ├── TodoItem.jsx      # Item individual da lista
│   ├── TodoList.jsx      # Lista completa de tarefas
│   └── TodoStats.jsx     # Estatísticas e barra de progresso
├── context/
│   └── TodoContext.jsx   # Context API, Provider e hook useTodo
├── hooks/
│   ├── useInput.js       # Hook customizado para campos de input
│   └── useLocalStorage.js # Hook customizado para persistência
├── App.jsx               # Componente raiz
├── main.jsx              # Ponto de entrada da aplicação
├── index.css             # Estilos globais e design tokens
└── App.css               # Estilos do componente App
```

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- npm (já vem instalado com o Node)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/lucassloliveira/todo-react-avancado.git

# 2. Entre na pasta do projeto
cd todo-list

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no seu navegador.

---

## 📦 Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

---

## 👤 Autor

Feito como projeto prático do módulo de React Avançado do curso de Front-End da EBAC.
