import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";

type TodosType = {
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

    const [todos, setTodos] = useState<TodosType[]>([])
// const [title,setTitle]=useState('')
    let title = useRef<HTMLInputElement>(null)

    const fetchQuery = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchQuery()
    }, [])

    const showHandler = () => {
        fetchQuery()
    }

    const hideHandler = () => {
        setTodos([])
    }

    const addTodo = () => {
        if (title.current) {
            const todo: TodosType = {userId: 100200,
                                     id: todos.length + 1,
                                      title: title.current.value,
                                      completed: false}
            setTodos([todo, ...todos])
            title.current.value = ''
        }

    }

    return (
        <div className="App">
            {/*<button onClick={showHandler}>Show me todos</button>*/}
            {/*<button onClick={hideHandler}>Hide todos</button>*/}
            <Button name={'Show me todos'} onClick={showHandler}/>
            <Button name={'Hide todos'} onClick={hideHandler}/>
            <div>
                <Input title={title}/>
                <Button name={'+'} callBack={addTodo}/>
            </div>
            <ul>
                {todos.map(el => {
                        return (
                            <li>
                                <span>{el.id}</span>
                                <span>{el.title}</span>
                                <input type="checkbox" name="myChecked" checked={el.completed}/>
                            </li>
                        )
                    }
                )
                }
            </ul>

        </div>
    );
}

export default App;
