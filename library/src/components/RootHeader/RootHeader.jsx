/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useQueryClient } from "react-query";
import { useEffect } from "react";

function RootHeader() {
    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useRecoilState(menuState);
    const queryClient = useQueryClient();
    const principal = queryClient.getQueryData("principalQuery"); // 해당 키값의 데이터를 가져옴
    const principalState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        console.log("useEffect");
        console.log(principal);
        console.log(principalState);
    }, [principalState.status]);

    const handleOpenClick = () => {
        setShow(() => true);
    };

    const handleRefetch = () => {
        queryClient.refetchQueries("principalQuery");
    };

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            <button onClick={handleRefetch}>principal 다시 로드</button>
            {!principal ? (
                <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
            ) : (
                <Link css={s.account} to={"/account/mypage"}>
                    <FiUser />
                </Link>
            )}
        </div>
    );
}

export default RootHeader;
