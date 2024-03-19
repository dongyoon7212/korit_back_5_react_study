/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { menuState } from "../../atoms/menuAtom";
import { FiUser, FiLogOut } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";

function RootHeader() {
    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useRecoilState(menuState);
    const [isLogin, setLogin] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    const navigate = useNavigate();

    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status]);

    const handleOpenClick = (e) => {
        e.stopPropagation();
        setShow(() => true);
    };

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken");
        // 요청 시 낚아채서 해당 함수 실행
        instance.interceptors.request.use((config) => {
            config.headers.Authorization = null;
            return config;
        });
        queryClient.refetchQueries("principalQuery");
        navigate("/");
    };

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            {!isLogin ? (
                <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
            ) : (
                <div css={s.accountItems}>
                    <button css={s.logout} onClick={handleLogoutClick}>
                        <FiLogOut />
                    </button>
                    <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>
                </div>
            )}
        </div>
    );
}

export default RootHeader;
