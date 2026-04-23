import React from 'react';

const ToDoPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todo = await res.json();

    return (
        <div>
                <h1 className='text-5xl font-bold mt-5'>Total ToDo : {todo.length}</h1>

                <div className='grid grid-cols-4 gap-4'>
                    {
                        todo.map(td => 
                            <div key={td.id} className='mt-4 text-2xl font-medium border-2 border-blue-400 p-2'>
                                <h1>{td.title}</h1>

                            </div>
                        )
                    }
                </div>
        </div>
    );
};

export default ToDoPage;