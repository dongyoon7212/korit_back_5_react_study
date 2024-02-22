/** @jsxImportSource @emotion/react */

import { useMemo, useState } from "react";
import * as S from "./style";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar() {
    const [isShow, setIsShow] = useState(false);

    const menus = useMemo(
        () => [
            {
                id: 1,
                path: "/mymage",
                name: "마이페이지",
            },
            {
                id: 2,
                path: "/board",
                name: "게시판",
            },
            {
                id: 3,
                path: "/notice",
                name: "공지사항",
            },
        ],
        []
    );

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
                {isShow ? <FaCaretLeft /> : <FaCaretRight />}
            </button>
            <ul>
                {menus.map((menu) => (
                    <Link to={menu.path} key={menu.id}>
                        <li>{menu.name}</li>
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;
