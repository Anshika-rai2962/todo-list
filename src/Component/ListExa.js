import React, { useState } from 'react'

function ListExa() {

   const[todoList, setTodoList] = useState('');  // this line use for only input and add button
   const[newList, setNewList] = useState([]);

   const addButton = () => {
    if(todoList.trim() !== ''){
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
            <h1>My Todo List</h1>
            <br />
            <input value={todoList} onChange={(e) => setTodoList(e.target.value)} type="text" placeholder="Add Your Item" />
            <button onClick={addButton}>Add</button>

            <ul>
                {newList.map((list) => {
                 return(
                    <>
                <div className="todo_style">
                    <i onClick={() => updateButton (list.id, prompt('update list:', list.text))} className='bx bxs-edit' />
                    <li key={list.id}>{list.text}</li>
                    <i onClick={() => deleteButton (list.id)} className='bx bx-x' />
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

export default ListExa