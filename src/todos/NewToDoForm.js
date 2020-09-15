import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createToDo } from './actions';
import './NewToDoForm.css';

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
        return (
        <div className="new-todo-form">
            <input 
                className="new-todo-input" 
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                />
            <button
                onClick={() => {
                    const isDuplicateText =
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}    
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    );
};

export default connect() (NewToDoForm);