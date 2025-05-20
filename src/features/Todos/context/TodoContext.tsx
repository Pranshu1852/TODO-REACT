import { createContext } from 'react';

import type { TodoContextType } from '../../../types/TodoContextType';

const TodoContext = createContext<TodoContextType | null>(null);

export default TodoContext;
