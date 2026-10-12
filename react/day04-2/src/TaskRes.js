import React from "react";

function TaskRes(props) {

    return (

        <div>

            <table border='1'>
                <thead>
                    <tr>
                        <th>할 일</th>
                        <th>마감일</th>
                        <th>작업</th>
                    </tr>
                </thead>

                <tbody>
                    {props.works.map((w, index) => (
                        <tr>
                            <td>{w.todo}</td>
                            <td>{w.end}</td>
                            <td>{<input type='button' value='삭제' onClick={() => { props.delWorks(index) }}></input>}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default TaskRes;