/** @jsxImportSource @emotion/react */

import { useState } from "react";

import * as S from "./style";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MENUS } from "../../constants/menu";

function SideBarTop() {
    const [isShow, setIsShow] = useState(false);

    return (
        <aside css={S.layout(isShow)}>
            <button css={S.toggleButton} onClick={() => setIsShow(!isShow)}>
                {isShow ? <FaAngleUp /> : <FaAngleDown />}
            </button>
            <ul css={S.menuList}>
                {MENUS.map((menu) => (
                    <Link
                        to={menu.path}
                        css={S.menuItem}
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

export default SideBarTop;
