// TasksContext.js
import React, { createContext, useState } from 'react';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: '1', title: 'Buy groceries' },
        { id: '2', title: 'Clean the house' },
        { id: '3', title: 'Finish project' },
    ]);

    const addTask = (title) => {
        const newTask = { id: Date.now().toString(), title };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const editTask = (id, newTitle) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task))
        );
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
            {children}
        </TasksContext.Provider>
    );
};
