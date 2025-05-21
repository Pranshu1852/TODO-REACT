import type { Todo } from '../types/TodoContextType';

export function searchArray(todoArray: Todo[], searchText: string | null) {
  if (!searchText) {
    return todoArray;
  }

  const filterArray = todoArray.filter((element) => {
    return (
      element.title.toLowerCase().includes(searchText) ||
      element.description.toLowerCase().includes(searchText)
    );
  });

  return filterArray;
}

export function filterArray(todoArray: Todo[], values: string | string[], key: keyof Pick<Todo,'priority' | 'status'>) {
    console.log(values);
    
  if (values.length !== 0) {
    const filterArray = todoArray.filter((element) => {
      return (
          values.includes(element[key])
      );
    });

    return filterArray;
  }

  return todoArray;
}
