import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";

function Users() {


    const [users, setUsers] = useState([])

    // 현재 페이지의 로드가 완료됐을때 자동으로 먼저 호출되는 영역

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => { 
                // console.log(response.data[0].name)
                setUsers(response.data)
            })

    })

    return (
        <div>
              <h1>사용자 목록</h1>
              
              <UserList users={users}/>
        </div>
    )
}

export default Users;