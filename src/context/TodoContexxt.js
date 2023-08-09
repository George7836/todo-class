import React from "react";

const defaultValues = {
  todos: [],
  filteredTodos: [],
  searchValue: '',
  theme: 'light',
  addTodo: (id, content, title, done, archived) => {},
  deleteTodo: (id) => {},
  setCompleted: (id) => {},
  updateTdod: (id, title, content) => {},
  addToArchive: (id) => {},
  setSearchValue: (text) => {},
  filterTodos: () => {},
  setLightMode: (mode) => {}
}
export const TodoContext = React.createContext(defaultValues)