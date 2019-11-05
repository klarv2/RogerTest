import React from 'react'
import TodoContextProvider from '../contexts/TodoContext'
import TodoList from './TodoList'
import NewTodoForm from './TodoForm'


export const ExpenseListRoute: React.FC<{}> = () => {

  return (
    <>
      <h1>Expenses</h1>
      <p>TODO</p>
    <TodoContextProvider>
      <TodoList />
      <NewTodoForm />
    </TodoContextProvider>
    </>
  )
}

export default ExpenseListRoute
