/** @jsxImportSource @emotion/react */

import * as S from "./style";
import { FaCaretRight } from "react-icons/fa";

function SideBar() {
    return (
        <aside css={S.layout}>
            <button css={S.toggleButton}>
                <FaCaretRight />
            </button>
        </aside>
    );
}

export default SideBar;
