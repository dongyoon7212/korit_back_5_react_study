/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { useCallback, useEffect } from "react";
import { getPricipalRequest } from "../../apis/api/principal";

function RootHeader() {
    // eslint-disable-next-line no-unused-vars
    const [show, setShow] = useRecoilState(menuState);

    useEffect(() => {
        getPrincipal();
    }, []);

    const getPrincipal = useCallback(() => {
        getPricipalRequest()
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleOpenClick = () => {
        setShow(() => true);
    };

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
            <Link css={s.account} to={"/account"}>
                <FiUser />
            </Link>
        </div>
    );
}

export default RootHeader;
