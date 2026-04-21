import React from 'react';

const TodosPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();

    return (
        <div>
            {
                todos.map(todo => <div key={todo.id} className='border border-blue-700 rounded-md p-3 m-3'>
                    <h2 className='text-2xl bg-gray-600'>{todo.title}</h2>
                    <p>Title: {todo.title}</p>
                    <p>Status: {todo.completed ? <span className='bg-green-400'>Completed</span>: 'Not Completed'}</p>
                </div>
                )
            }
        </div>
    );
};

export default TodosPage;