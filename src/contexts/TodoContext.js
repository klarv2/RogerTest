import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    {title: 'todo1', file: 'file1.jpg', vendor:'vendor1', date:'11/05/2019', amount:'$400', id: 1, status: 'Paid'}
  ]);

  const groups = [
      {status:'Uploading'},
      {status:'Analyzing'},
      {status:'Unpaid'},
      {status:'Paid'}
  ]
  const addTodo = (title, file, vendor, amount, date, status) => {
    setTodos([...todos, {title, file, vendor, amount, date, status, id: uuid()}]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <TodoContext.Provider value={{ todos, groups, addTodo, removeTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
}
 
export default TodoContextProvider;
