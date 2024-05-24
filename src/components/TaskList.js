import React from 'react'

const TaskList = ({todos, setTodos, setEditTodo}) => {

    const handleComplete = (id) => {
        setTodos(
          todos.map((item) => {
            if (item.id === id) {
              return { ...item, completed: !item.completed };
            }
            return item;
          })
        );
      };

    const handleEdit = (id)=>{
        const findTodo = todos.find((todo)=> todo.id === id);
        setEditTodo(findTodo); 
    }

    const handleDelete = (id)=>{
        setTodos(todos.filter((todo)=> todo.id !== id)); 
    }

  return (
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
            <input type="text" 
            value={todo.title} 
            className={`list ${todo.completed ? "complete" : "" }  `} 
            onChange={(event)=>event.preventDefault()} 
            />

            <div>
                <button className='button-complete task-button' onClick={()=>handleComplete(todo.id)}>
                <i class="fa-regular fa-circle-check"></i>
                </button>
                <button className='button-edit task-button' onClick={()=> handleEdit(todo.id)}>
                <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button className='button-delete task-button'  onClick={()=>handleDelete(todo.id)}>
                <i class="fa-regular fa-trash-can" ></i>
                </button>
            </div>
        </li>
      )
      )}
    </div>
  )
}

export default TaskList
