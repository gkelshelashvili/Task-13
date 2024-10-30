import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './utils/todos/todosSlice';
import themeReducer from './utils/theme/themeSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    theme: themeReducer,
  },
});

export default store;
