import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import List from "./List";

export default function MyPage() {
    return (
        <div className='app'>

            <h1>게임 등록</h1>

            <nav className='nav'>
                <Link to='/'>등록</Link>
                <Link to='/list'>리스트</Link>
            </nav>



            <main className='app-main'>

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/list' element={<List />} />
                </Routes>
            </main>

        </div>
    )
}

