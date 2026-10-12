import React from "react";
import { Link } from "react-router-dom";


export default function Home() {

    return (
        <div>
            <h2>홈</h2>
            <p>여기는 홈입니다</p>
            <p>
                <Link to='hello/react'>동적 라우터의 예시</Link>
            </p>
        </div>
    )
}
