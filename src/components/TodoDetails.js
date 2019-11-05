import React, {useContext} from 'react';
import {TodoContext} from '../contexts/TodoContext';

const TodoDetails = ({ todo }) => {
    const { removeTodo } = useContext(TodoContext);
    return(
        <li>
            <div className="title">{todo.title}</div>
            <div className="file">{todo.file}</div>
            <div className="file">{todo.date}</div>
            <div className="file">{todo.vendor}</div>
            <div className="file">{todo.amount}</div>
            <button>Pay</button>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </li>
    )
}

export default TodoDetails;