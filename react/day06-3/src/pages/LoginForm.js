import React from "react";

function LoginForm(props){
    return(
        <div className="page">
                    <div className="titleWrap">
                        이메일과 비밀번호를<br />입력 해 주세요
                    </div>

                    <div className="contentWrap">

                        <div className="inputTitle">이메일 주소</div>

                        <div className="inputWrap">
                            <input className="input" placeholder="abc@ewam.com"
                                value={props.email} onChange={props.handleEmail} />
                        </div>

                        <div className="errorMessageWrap">
                            {!props.emailValid && (<div>올바른 이메일을 입력하세요</div>)}
                        </div>

                        <div className="inputTitle">
                            비밀번호
                        </div>

                        <div className="inputWrap">
                            <input type='password' className="input" placeholder="비밀번호 입력"
                                value={props.pw} onChange={props.handlePw} />
                        </div>

                        <div className="errorMessageWrap">
                            {!props.pwValid && (<div>올바른 비밀번호를 입력하세요</div>)}
                        </div>

                    </div>

                    <div>
                        <button className="bottomButton" onClick={props.myConfirm}>
                            확인
                        </button>
                    </div>
                </div>
    )
}

export default LoginForm