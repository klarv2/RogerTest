import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const NewTodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [title, setTitle] = useState ('');
    const [file, setFile] = useState ('');
    const [date, setDate] = useState (new Date());
    const [vendor, setVendor] = useState ('');
    const [amount, setAmount] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(title, file, date, vendor, amount);
        setTitle('');
        setFile('');
        setVendor('');
        setAmount('');
        setDate('');
      }

    return(
        <form onSubmit={handleSubmit}>
            <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
            File:
            <input type="file" value={file} onChange={(e) => setFile(e.target.value)} required/>
            </label>
            <label>
            Vendor:
            <input type="text" value={vendor} onChange={(e) => setFile(e.target.value)} required/>
            </label>
            <label>
            Status:
            <input type="text" value={amount} onChange={(e) => setFile(e.target.value)} required/>
            </label>
            <input type="submit" value="add todo"/>
        </form>
    )
}


export default NewTodoForm
