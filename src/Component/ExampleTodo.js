import React, { useState } from 'react'

function ExampleTodo() {

    const[listTo, setListTo] = useState('');
    const[listNew, setListNew] = useState([]);

    const addItem = () => {
      if(listTo.trim() !== ''){
       setListNew([...listNew, {id:Date.now(), text: listTo}]);
       setListTo('');
      };  
    };

    const updateItem = (id, newList) => {
     const updatedButton = listNew.map((todo) =>
     todo.id === id ? {...todo, text: newList} : todo
     );
     setListNew(updatedButton);
    };

    const deleteItem = (id) => {
      const updatedButton = listNew.filter((todo) =>
      todo.id !== id 
      );
      setListNew(updatedButton);  
    };

    

  return (
    <>
       <div className="main_div">
        <div className="center_div">
            <br />
            <h1>List</h1>
            <br />
            <input value={listTo} onChange={(e) => setListTo(e.target.value)} type="text" placeholder='Add New Items' />
            <button onClick={addItem}>Add</button>

            <ul>
                {listNew.map((todo) => {
                 return(   
                <>
                <div className="todo_style">
                    <i onClick={() => updateItem (todo.id, prompt('update todo:', todo.text))} className='bx bxs-edit' />
                    <li key={todo.id}>{todo.text}</li>
                    <i onClick={() => deleteItem (todo.id)} className='bx bx-x' />
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

export default ExampleTodo