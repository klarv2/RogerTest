
import React, { useContext } from 'react'
import {TodoContext} from '../contexts/TodoContext'
import TodoDetails from './TodoDetails'

const TodoList = () => {
    const {todos, groups} = useContext (TodoContext);
    console.log(groups)
    return todos.length ? (
        <div className="todo-list">
            <ul>
                {todos.map(todo => {
                    return ( <TodoDetails todo={todo} key={todo.id}/> );
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No todos to display</div>
    )

   
}

// Couldn't finish run out of time

//return(
//    groups.map(group =>{
//       return(
//            <div><h3>{group.status}</h3></div>
//            <div className="todo-list"></div>
//            todos.filter(todo => group.status.includes(todo.status)).map(todo =>{
//                return ( <TodoDetails todo={todo} key={todo.id}/> );
//           })
//        )
//   })
//)

export default TodoList