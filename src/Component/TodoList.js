import React, { useState } from 'react'

function TodoList() {

    const[todoList, setTodoList] = useState('');
    const[newList, setNewList] = useState([]);

    const addButton = () => {
        if(todoList.trim() !== '') {
            setNewList([...newList, {id: Date.now(), text: todoList}]);
            setTodoList('');
        }
    };

    const updateButton = (id, newText) => {
      const updatedTask = newList.map((list) =>
      list.id === id ? {...list, text: newText} : list
      );
        setNewList(updatedTask);
    };

    const deleteButton = (id) => {
     const updatedTask = newList.filter((list) => 
     list.id !== id
     );
     setNewList(updatedTask);
    };



  return (
    <>
       <div className="main_div">
          <div className="center_div">
             <br />
             <h1>New Todo List</h1>
             <br />
             <input type="text" value={todoList} onChange={(e) => setTodoList(e.target.value)} placeholder="Add Items For Your Daily Routine" />
             <button onClick={addButton}>Add</button>

             <ul>
                {newList.map((list) => {
                   return(
                     <>
                      <div className="todo_style">
                        <i onClick={() => deleteButton(list.id)} className='bx bx-x'/>
                        <li key={list.id}>{list.text}</li>
                        <i onClick={() => updateButton(list.id, prompt('Update list:', list.text))} className='bx bxs-edit'/>
                      </div>
                     </>
                   )
                })};
             </ul>
             
          </div>
       </div>
    </>
  )
}

export default TodoList