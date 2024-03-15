/** @jsxImportSource @emotion/react */
import * as s from "./style";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import RightTopButton from "../../components/RightTopButton/RightTopButton";
import { useInput } from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();
    const [username, usernameChange, usernameMessage] = useInput("username");
    const [password, passwordChange, passwordMessage] = useInput("password");
    const [checkPassword, checkPasswordChange] = useInput("checkPassword");
    const [name, nameChange, nameMessage] = useInput("name");
    const [email, emailChange, emailMessage] = useInput("email");

    const handleSignupSubmit = () => {};
    return (
        <>
            <div css={s.header}>
                <h1>회원가입</h1>
                <RightTopButton onClick={handleSignupSubmit}>
                    가입하기
                </RightTopButton>
            </div>
            <AuthPageInput
                type={"text"}
                name={"username"}
                placeholder={"사용자이름"}
                value={username}
                onChange={usernameChange}
                message={usernameMessage}
            />
            <AuthPageInput
                type={"password"}
                name={"password"}
                placeholder={"비밀번호"}
                value={password}
                onChange={passwordChange}
                message={passwordMessage}
            />
            <AuthPageInput
                type={"password"}
                name={"checkPassword"}
                placeholder={"비밀번호 확인"}
                value={checkPassword}
                onChange={checkPasswordChange}
                message={null}
            />
            <AuthPageInput
                type={"text"}
                name={"name"}
                placeholder={"성명"}
                value={name}
                onChange={nameChange}
                message={nameMessage}
            />
            <AuthPageInput
                type={"text"}
                name={"email"}
                placeholder={"이메일"}
                value={email}
                onChange={emailChange}
                message={emailMessage}
            />
        </>
    );
}

export default SignupPage;
