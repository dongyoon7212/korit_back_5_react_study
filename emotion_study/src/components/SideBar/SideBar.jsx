/** @jsxImportSource @emotion/react */

import { useState } from "react";
import * as S from "./style";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";

function SideBar() {
    const [isShow, setIsShow] = useState(false);

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
                {isShow ? <FaCaretLeft /> : <FaCaretRight />}
            </button>
            <ul css={S.menuList}>
                {MENUS.map((menu) => (
                    <Link
                        css={S.menuItem}
                        to={menu.path}
                        key={menu.id}
                        onClick={() => setIsShow(false)}
                    >
                        <li>{menu.name}</li>
                    </Link>
                ))}
            </ul>
        </aside>
    );
}

export default SideBar;
