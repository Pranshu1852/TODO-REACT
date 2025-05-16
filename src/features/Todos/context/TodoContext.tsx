import {
  createContext,
  useReducer,
  type ActionDispatch,
  type ReactNode,
} from 'react';
import storageHandler from '../../../utils/storageHandler';
import type { PriorityType, StatusType } from '../../../components/Todo';

interface Todo {
  id: string;
  title: string;
  description: string;
  priority: PriorityType;
  status: StatusType;
  created_at: Date;
}

const initialState = {
  todoArray: storageHandler.getStorage<Array<Todo>>('todos') || [],
};

type TodoContextStateType = typeof initialState;

enum TodoContextActions {
  ADDTODO,
  UPDATETODO,
  REMOVETODO,
}

type TodoContextActionType =
  | {
      type: TodoContextActions.ADDTODO;
      payload: Todo;
    }
  | {
      type: TodoContextActions.UPDATETODO;
      payload: string;
    }
  | {
      type: TodoContextActions.REMOVETODO;
      payload: string;
    };

function addTodo(todoArray: Array<Todo>, todo: Todo) {
  const newArray = [...todoArray, todo];
  storageHandler.setStorage('todo', newArray);
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

export interface TodoContextType {
  state: TodoContextStateType;
  dispatch: ActionDispatch<[action: TodoContextActionType]>;
}

const TodoContext = createContext<TodoContextType | null>(null);

function TodoContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state: state, dispatch: dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
