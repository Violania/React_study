import React from "react";

function UserList({users}) {
    return (
        <div>
          {
            users.map((u)=>(
                <div>
                    {u.name} &nbsp;&nbsp;&nbsp;
            
                    {u.address.city}
                    <br/>

                </div>
            ))
          }
        </div>
    )
}

export default UserList;