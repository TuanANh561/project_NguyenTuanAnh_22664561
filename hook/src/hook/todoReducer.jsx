import React, { useState, useEffect, useRef, useMemo, useReducer } from "react";
import '../App.css'
const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case 'TOGGLE':
            return state.map(todo => 
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        case 'DELETE':
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'))
        if(storedTodos){
            dispatch({type: 'SET', payload: storedTodos})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },  [todos])

    const filteredTodos = useMemo(() => {
        return {
            imcomplete: todos.filter(todo => !todo.completed),
            completed: todos.filter(todo => todo.completed),
        }
    }, [todos])

    const handleAddTodo = () => {
        if(!inputValue) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false,
        }
        dispatch({ type: 'ADD', payload: newTodo })
        console.log('Danh sách cv: ' , [...todos, newTodo])
        setInputValue('')
        inputRef.current.focus()
    }

    const handleToggleTodo = (id) => {
        dispatch({ type: 'TOGGLE', payload: id })
    }

    const handleDeleteTodo = (id) => {
        dispatch({ type: 'DELETE', payload: id })
    }

    return (
        <div className="todo-list">
            <h1>To do list</h1>
            <div>
                <input className="input" ref={inputRef} type="text" placeholder="Nhập công việc" 
                value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <br />
                <button className="add" onClick={handleAddTodo}>Add Todo</button>
            </div>

            <div>
            <h2>Imcomlete Tasks</h2>
               {filteredTodos.imcomplete.map(todo => {
                return (
                    <li key = {todo.id} >
                    <span className={todo.id ? 'completed' : ''} onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
                    <div style={{textAlign : 'right'}}>
                        <button className="bt" onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
                    </div>
                  </li>
                )
               })}
            </div>
            <div>
            <h2>Completed Tasks</h2>
               {filteredTodos.completed.map(todo => {
                return (
                    <li key = {todo.id} >
                    <span className={todo.id ? 'completed' : ''} onClick={() => handleToggleTodo(todo.id)}>{todo.text}</span>
                    <div style={{textAlign : 'right'}}>
                    <button className="bt" onClick={() => handleDeleteTodo(todo.id)}>Xóa</button>
                    </div>

                  </li>
                )
               })}
            </div>

        </div>
    )
}

export default App;