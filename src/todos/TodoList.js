import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewToDoForm from './NewToDoForm';
import ToDoListItem from './ToDoListItem';
import { loadTodos, removeTodoRequest, markTodoAsCompletedRequest } from './thunks';
import { removeTodo  } from './actions';
import './ToDoList.css';

const ToDoList = ({ todos = [], onRemovePressed, onCompletedPressed, startLoadingTodos, isLoading }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>;
        const content = (
        <div className="List-wrapper">
            <NewToDoForm />
            {todos.map(
                todo => <ToDoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}  
                onCompletedPressed={onCompletedPressed}/>)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);