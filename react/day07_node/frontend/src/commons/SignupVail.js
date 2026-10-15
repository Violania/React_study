import React from "react";

function SignupVail(values) {
    if (values.name == '') {
        alert('이름을 입력하세요');
        return false;
    }

    if (values.email == '') {
        alert('이메일을 입력하세요');
        return false;
    }

    if (values.password == '') {
        alert('비밀번호를 입력하세요');
        return false;
    }
    //유효성 체크 통과시 true 반환
    return true;
}

export default SignupVail