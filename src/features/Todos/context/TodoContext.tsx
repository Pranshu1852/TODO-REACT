import { createContext } from 'react';

import type { TodoContextType } from '../../../types/TodoContextType';

const TodoContext = createContext<TodoContextType>({
  state: {
    todoArray: [],
  },
  dispatch: () => {},
});

export default TodoContext;
