import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Home() {

    const [genre, setGenre] = useState("선택")
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [platform, setPlatform] = useState('')
    const [games, setGames] = useState([])


    function handleGame() {
        if (!name.trim()) {
            alert('제목을 입력하세요')
        }
        const newGame = { genre, name, date, platform };
        onAddGame(newGame);


        setGenre("선택");
        setName('');
        setDate('');
        setPlatform('');


        Navigate('/list');
    };



    return (
        <div>


            <p>장르</p>
            <select value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option>선택</option>
                <option>액션</option>
                <option>RPG</option>
                <option>FPS</option>
            </select>

            <p>제목</p>
            <input value={name} onChange={(e) => { setName(e.target.value) }} /> <br />

            <p>출시일</p>
            <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }}></input><br />

            <p>플렛폼</p>
            <input value={platform} onChange={(e) => { setPlatform(e.target.value) }} /> <br />

            <button onClick={handleGame}>추가</button>

        </div>
    )
}
export default Home;