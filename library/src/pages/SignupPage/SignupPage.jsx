/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import RightTopButton from "../../components/RightTopButton/RightTopButton";

function SignupPage() {
    return (
        <>
            <div css={s.header}>
                <h1>회원가입</h1>
                <RightTopButton>가입하기</RightTopButton>
            </div>
            <AuthPageInput
                type={"text"}
                name={"username"}
                placeholder={"사용자이름"}
            />
            <AuthPageInput
                type={"password"}
                name={"password"}
                placeholder={"비밀번호"}
            />
            <AuthPageInput
                type={"password"}
                name={"checkPassword"}
                placeholder={"비밀번호 확인"}
            />
            <AuthPageInput type={"text"} name={"name"} placeholder={"성명"} />
            <AuthPageInput
                type={"text"}
                name={"email"}
                placeholder={"이메일"}
            />
        </>
    );
}

export default SignupPage;