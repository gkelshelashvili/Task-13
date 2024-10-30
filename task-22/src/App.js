import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './components/Form';
import List from './components/List';
import ThemeToggle from './components/ThemeToggle';
import { fetchTodos } from './utils/todos/todosThunks';
import './App.css';

function App() {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Todo List</h1>
        <ThemeToggle />
      </header>
      <main>
        <Form />
        <List />
      </main>
    </div>
  );
}

export default App;
