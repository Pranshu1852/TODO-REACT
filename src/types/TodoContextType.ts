import type { ActionDispatch } from 'react';

import type { PriorityType, StatusType } from './Todotypes';

export interface Todo {
  id: string;
  title: string;
  description: string;
  priority: PriorityType;
  status: StatusType;
  created_at: Date;
}

export interface TodoContextStateType {
  todoArray: Todo[];
}

export enum TodoContextActions {
  ADDTODO,
  UPDATETODO,
  REMOVETODO,
}

export type TodoContextActionType =
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

export interface TodoContextType {
  state: TodoContextStateType;
  dispatch: ActionDispatch<[action: TodoContextActionType]>;
}
