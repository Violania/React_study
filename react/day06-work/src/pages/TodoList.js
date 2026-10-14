import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function TodoList() {


    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setList(response.data)
            })
    },[])

    return (
        <div>

            <h1>Todo 목록</h1>
            <ul>

                {list.map((todo) => (
                    <li>
                        <Link to={`/tododetail/${todo.id}`}
                            state={{
                                id: todo.id,
                                title: todo.title,
                                completed: todo.completed
                            }}>
                            {todo.id}-
                            {todo.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList