/** @jsxImportSource @emotion/react */
import * as s from "./style";
import userImg from "../../assets/bio-photo.jpg";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";

function SideMenuUser(props) {
    const [isLogin, setLogin] = useState(false);
    const queryClient = useQueryClient();
    const userData = queryClient.getQueryData("principalQuery");
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const navigate = useNavigate();

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    const handleLoginClick = () => {
        navigate("/auth/signin");
    };

    return (
        <>
            {isLogin ? (
                <div css={s.layout}>
                    <button css={s.setting}>
                        <IoMdSettings />
                    </button>
                    <img src={userImg} alt="" css={s.userImg} />
                    <div css={s.userInfo}>{userData.data.username}</div>
                    <div css={s.userInfo}>{userData.data.email}</div>
                </div>
            ) : (
                <div css={s.layout}>
                    <button css={s.loginButton} onClick={handleLoginClick}>
                        로그인
                    </button>
                </div>
            )}
        </>
    );
}

export default SideMenuUser;
