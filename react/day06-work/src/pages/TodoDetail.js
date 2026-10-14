import React from "react";
import { useLocation } from "react-router-dom";

function TodoDetail() {

    let location = useLocation();
    let id=location.state.id
    let title=location.state.title
    let completed=location.state.completed
    
    return (
        <div>
            <h1>상세 보기</h1>

            <p>ID : {id} </p>
            <p>제목 : {title}</p> 
            <p>완료 여부 : {completed ? '미완료':'완료'}</p>
        </div>
    )
}

export default TodoDetail