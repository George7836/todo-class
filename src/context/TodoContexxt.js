import React from "react";

const defaultValues = {
  todos: [],
  addTodo: (id, content, title, done) => {},
}
export const TodoContext = React.createContext(defaultValues)