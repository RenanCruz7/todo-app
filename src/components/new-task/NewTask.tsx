import './NewTask.css';
import React, { useState } from 'react';
import { useTaskStore } from '../../store/useTaskStore';
function NewTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addTask = useTaskStore((state) => state.addTask);

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            addTask({ title, description });
            setTitle('');
            setDescription('');
        }
    };
    return (
        <section className="new-task-container">
            <input 
            className="new-task-input" 
            type="text" 
            placeholder="Add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            />
            <textarea 
            className="new-task-textarea" 
            placeholder="Add task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            ></textarea>
        </section>
    );
}

export default NewTask;