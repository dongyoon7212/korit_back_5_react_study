/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const layout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

function ImageEx() {
    return <div css={layout}></div>;
}

export default ImageEx;
