import { useReducer, type ReactNode } from 'react';

import {
  TodoContextActions,
  type Todo,
  type TodoContextActionType,
  type TodoContextStateType,
} from '../../../types/TodoContextType';
import storageHandler from '../../../utils/storageHandler';

import TodoContext from './TodoContext';

const initialState = {
  todoArray: storageHandler.getStorage<Array<Todo>>('todos'),
};

function addTodo(todoArray: Array<Todo>, todo: Todo) {
  const newArray = [...todoArray, todo];
  storageHandler.setStorage('todos', newArray);
  return newArray;
}

function reducer(state: TodoContextStateType, action: TodoContextActionType) {
  switch (action.type) {
    case TodoContextActions.ADDTODO: {
      if (action.payload) {
        return {
          todoArray: addTodo(state.todoArray, action.payload),
        };
      }

      return state;
    }
    case TodoContextActions.UPDATETODO: {
      return state;
    }
    case TodoContextActions.REMOVETODO: {
      return state;
    }
  }

  return state;
}

function TodoContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
