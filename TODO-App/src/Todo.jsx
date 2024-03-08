import React, { useState, useEffect } from 'react';

export const Todo = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [todoItem, setTodoItem] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = () => {
    if (todoItem !== "") {
      setTodoList([...todoList, { item: todoItem, description: todoDescription }]);
      setTodoItem("");
      setTodoDescription("");
    } else {
      alert("Please enter a todo item");
    }
  };

  const deleteTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='bg-black w-[80vw] h-[39vw] mx-10 my-10 text-white rounded-[20px]'>
        <div className='flex flex-col justify-center items-center mt-8 text-3xl font-semibold'>
          My Todos
        </div>
        <div className="flex justify-between h-26 p-8 w-[70vw] rounded-lg mx-20 mt-5 mb-5 bg-neutral-700">
          <div className='flex flex-row ml-4'>
            <input
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
              className="mr-4 p-2 text-black rounded-lg"
              type="text"
              placeholder='Name'
            />
            <input
              value={todoDescription}
              onChange={(e) => setTodoDescription(e.target.value)}
              type="text"
              className='p-2 text-black rounded-lg'
              placeholder='Description'
            />
          </div>
          <div className='flex items-center'>
            <button onClick={addTodo} className="bg-orange-600 text-white rounded-[25px] mr-4 p-2">
              Add Todo
            </button>
          </div>
        </div>

        <div className="flex flex-col p-4  w-[70vw] mx-20 rounded-lg bg-neutral-700">
          {todoList.map((todo, index) => (
            <div key={index} className='text-xl border-b-2 border-white py-2 flex items-start'>
              <div className='flex flex-col'>
                <div className='text-2xl text-orange-600'>{todo.item}</div>
                <div>{todo.description}</div>
              </div>
              <button onClick={() => deleteTodo(index)} className="bg-orange-600 text-white  mr-8 rounded-[25px] p-2 ml-auto">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};