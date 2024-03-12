/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { HiMenu } from "react-icons/hi";

function RootHeader() {
    return (
        <div css={s.header}>
            <button css={s.menuButton}>
                <HiMenu />
            </button>
        </div>
    );
}

export default RootHeader;
