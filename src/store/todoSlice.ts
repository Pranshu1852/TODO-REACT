import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Todo } from '../types/TodoContextType';
import storageHandler from '../utils/storageHandler';

const initialTodoState = {
  todoArray: storageHandler.getStorage<Array<Todo>>('todos') || [],
};

function addTodo(todoArray: Array<Todo>, todo: Todo) {
  const newArray = [...todoArray, todo];
  storageHandler.setStorage('todos', newArray);
  return newArray;
}

function updateTodo(todoArray: Array<Todo>, updateTodo: Todo) {
  const updateArray = todoArray.map((element) => {
    if (element.id === updateTodo.id) {
      return {
        ...element,
        ...updateTodo,
      };
    }

    return element;
  });

  storageHandler.setStorage('todos', updateArray);

  return updateArray;
}

function removeTodo(todoArray: Array<Todo>, id: string) {
  const updateArray = todoArray.filter((element) => {
    return element.id !== id;
  });

  storageHandler.setStorage('todos', updateArray);

  return updateArray;
}

const todoSlice = createSlice({
  name: 'todoState',
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.todoArray = addTodo(state.todoArray, action.payload);
    },
    updateTodo(state, action: PayloadAction<Todo>) {
      state.todoArray = updateTodo(state.todoArray, action.payload);
    },
    removeTodo(state, action: PayloadAction<string>) {
      state.todoArray = removeTodo(state.todoArray, action.payload);
    },
  },
});

const todoAction = todoSlice.actions;

export { todoSlice, todoAction };
