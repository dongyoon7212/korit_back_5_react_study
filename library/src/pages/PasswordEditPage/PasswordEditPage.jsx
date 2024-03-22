import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useInput } from "../../hooks/useInput";

function PasswordEditPage(props) {
    const [oldPassword, handleOldPassword, oldMessage] =
        useInput("oldPassword");
    const [newPassword, handleNewPassword, newMessage] =
        useInput("newPassword");
    const [newPasswordCheck, handleNewPasswordCheck, newCheckMessage] =
        useInput("newPasswordCheck");

    return (
        <div>
            <h1>비밀번호 변경</h1>
            <AuthPageInput
                type={"password"}
                value={oldPassword}
                onChange={handleOldPassword}
                placeholder={"현재 비밀번호를 입력하세요."}
                message={oldMessage}
            />
            <AuthPageInput
                type={"password"}
                value={newPassword}
                onChange={handleNewPassword}
                placeholder={"새로운 비밀번호를 입력하세요."}
                message={newMessage}
            />
            <AuthPageInput
                type={"password"}
                value={newPasswordCheck}
                onChange={handleNewPasswordCheck}
                placeholder={"새로운 비밀번호를 확인하세요."}
                message={newCheckMessage}
            />
        </div>
    );
}

export default PasswordEditPage;
