/** @jsxImportSource @emotion/react */
import { GridLoader } from "react-spinners";
import * as s from "./style";

function FullSizeLoader(props) {
    return (
        <div css={s.layout}>
            <GridLoader color="#36d7d7" />
        </div>
    );
}

export default FullSizeLoader;
