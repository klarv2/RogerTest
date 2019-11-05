
import React, { useContext } from 'react'
import {TodoContext} from '../contexts/TodoContext'
import TodoDetails from './TodoDetails'

const TodoList = () => {
    const {todos, groups} = useContext (TodoContext);
    console.log(groups)
    return(
        <div>
          {groups.map(group =>{
                return(
                    <div>
                        <h3>{group.status}</h3>
                        <ul>
                    {todos.filter(todo => group.status.includes(todo.status)).map(todo =>{
                        return ( <TodoDetails todo={todo} key={todo.id}/> );
                    })}
                    </ul>
                    </div>
                )
            })
          }  
        </div>
       
    )
}

export default TodoList