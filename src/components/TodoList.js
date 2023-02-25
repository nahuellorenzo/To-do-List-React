import React, { useState } from 'react';
import './../tailwind.css';
import Task from './Task.js';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim() === '') {
            return;
        }

        setTodos((prevTodos) => [
            ...prevTodos,
            { id: Date.now(), text: inputValue, completed: false },
        ]);
        setInputValue('');
    };

    const handleTodoComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleTodoDelete = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
            <form onSubmit={handleFormSubmit} className="mb-4">
                <input
                    type="text"
                    placeholder="Add a task"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-400 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </form>
            <div className="todo-list">
                {todos.map((todo) => (
                    <Task
                        key={todo.id}
                        task={todo}
                        completeTask={handleTodoComplete}
                        deleteTask={handleTodoDelete}
                    />

                ))}
            </div>

        </div>
    );
}

export default TodoList;
