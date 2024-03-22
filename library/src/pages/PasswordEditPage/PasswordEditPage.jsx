import { useMutation } from "react-query";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useInput } from "../../hooks/useInput";

function PasswordEditPage(props) {
    useAuthCheck();
    const [oldPassword, handleOldPassword, oldMessage] =
        useInput("oldPassword");
    const [newPassword, handleNewPassword, newMessage] =
        useInput("newPassword");
    const [newPasswordCheck, handleNewPasswordCheck, newCheckMessage] =
        useInput("newPasswordCheck");

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: null,
        onSuccess: response => {

        },
        onError: error => {
            
        }
    });

    const handleEditSubmitClick = () => {
        editPasswordMutation.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck,
        });
    };

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
            <button onClick={handleEditSubmitClick}>비밀번호 변경</button>
        </div>
    );
}

export default PasswordEditPage;
