/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";

function RootSideMenuLeft() {
    const [show, setShow] = useRecoilState(menuState);

    const handleCloseClick = () => {
        setShow(() => false);
    };

    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;
