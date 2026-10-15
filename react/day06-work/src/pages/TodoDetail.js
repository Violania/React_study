import React from "react";
import { useLocation, useParams } from "react-router-dom";

function TodoDetail() {

    const { id } = useParams();
    let location = useLocation();
    const todo = location.state.todo

    return (
        <div>
            <h1>상세 보기</h1>

            <p>ID : {id} </p>
            <p>제목 : {todo.title}</p>
            <p>완료 여부 : {todo.completed ? '완료' : '미완료'}</p>
        </div>
    )
}

export default TodoDetail