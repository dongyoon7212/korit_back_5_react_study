import { useMutation } from "react-query";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useInput } from "../../hooks/useInput";
import { editPasswordRequest } from "../../apis/api/editPassword";

function PasswordEditPage(props) {
    useAuthCheck();
    const [oldPassword, handleOldPassword, oldMessage, setOld, setOldMessage] =
        useInput("oldPassword");
    const [newPassword, handleNewPassword, newMessage, setNew, setNewMessage] =
        useInput("newPassword");
    const [
        newPasswordCheck,
        handleNewPasswordCheck,
        newCheckMessage,
        setNewCheck,
        setNewCheckMessage,
    ] = useInput("newPasswordCheck");

    const editPasswordMutation = useMutation({
        mutationKey: "editPasswordMutation",
        mutationFn: editPasswordRequest,
        onSuccess: (response) => {
            alert("비밀번호가 변경되었습니다.\n다시 로그인 해주세요.");
            localStorage.removeItem("AccessToken");
            window.location.replace("/auth/signin");
        },
        onError: (error) => {
            if (error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);
                setOldMessage(null);
                setNewMessage(null);
                setNewCheckMessage(null);
                for (let [k, v] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v,
                    };
                    if (k === "oldPassword") {
                        setOldMessage(() => {
                            return setOldMessage(() => message);
                        });
                    }
                    if (k === "newPassword") {
                        setOldMessage(() => {
                            return setNewMessage(() => message);
                        });
                    }
                    if (k === "newPasswordCheck") {
                        setOldMessage(() => {
                            return setNewCheckMessage(() => message);
                        });
                    }
                }
            }
        },
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
