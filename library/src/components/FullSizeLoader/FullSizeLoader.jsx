/** @jsxImportSource @emotion/react */
import { BarLoader } from "react-spinners";
import * as s from "./style";

function FullSizeLoader({ size }) {
    return (
        <div css={s.layout}>
            <BarLoader color="#36d7d7" height={8} width={150} />
        </div>
    );
}

export default FullSizeLoader;
