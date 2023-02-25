import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Task = ({ task, completeTask, deleteTask }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompleteTask = () => {
        setIsCompleted(!isCompleted);
        completeTask(task.id);
    };

    return (
        <div className={`flex items-center justify-between px-4 py-3 mb-3 rounded-md shadow-md ${isCompleted ? 'bg-green-100' : 'bg-white'}`}>
            <div className="flex items-center">
                <div className={`rounded-full w-6 h-6 mr-3 ${isCompleted ? 'bg-green-400' : 'bg-gray-300'}`} onClick={handleCompleteTask}>
                    {isCompleted && <FaCheck className="text-white mx-auto my-auto" />}
                </div>
                <p className={`text-lg font-medium ${isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}>{task.text}</p>
            </div>
            <button className="text-red-500 hover:text-red-700" onClick={() => deleteTask(task.id)}>
                <FaTrash />
            </button>
        </div>
    );
};

export default Task;