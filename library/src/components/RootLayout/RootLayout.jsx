/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { menuState } from "../../atoms/menuAtom";

function RootLayout({ children }) {
    const [show, setShow] = useRecoilState(menuState);

    const hanleBackgroundClick = (e) => {
        setShow(() => false);
    };

    return (
        <>
            <div css={s.background}></div>
            <dir css={s.layout} onClick={hanleBackgroundClick}>
                {children}
            </dir>
        </>
    );
}

export default RootLayout;
