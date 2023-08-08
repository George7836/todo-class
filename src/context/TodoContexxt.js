import React from "react";

const defaultValues = {
  todos: [],
  addTodo: (id, content, title, done, archived) => {},
  deleteTodo: (id) => {},
  setCompleted: (id) => {},
  updateTdod: (id, title, content) => {},
  addToArchive: (id) => {}
}
export const TodoContext = React.createContext(defaultValues)