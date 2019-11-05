import React, { useContext, useState } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const NewTodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [title, setTitle] = useState ('');
    const [file, setFile] = useState ('');
    const [vendor, setVendor] = useState ('');
    const [amount, setAmount] = useState (''); 
    const [date, setDate] = useState (new Date().getDate()+"/"+(new Date().getMonth()+1)+"/"+new Date().getFullYear());
    const [status, setStatus] = useState ('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(title, file, vendor, amount, date,status);
        setTitle('');
        setFile('');
        setVendor('');
        setAmount('');
        setDate('');
        setStatus('');
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
            <input type="text" value={vendor} onChange={(e) => setVendor(e.target.value)} required/>
            </label>
            <label>
            Amount:
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
            </label>
            <label>
            Status:
            <select onChange={(e) => setStatus(e.target.value)}>
            <option value="Uploading">Uploading</option>
            <option value="Analyzing">Analyzing</option>
            <option value="Unpaid">Unpaid</option>
            <option value="Paid">Paid</option>
            </select>
            </label>
            <input type="submit" value="add todo"/>
        </form>
    )
}

//uploading have to change for isloading when file is been upload

export default NewTodoForm