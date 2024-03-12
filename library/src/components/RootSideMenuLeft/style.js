import { css } from "@emotion/react";

export const layout = (show) => css`
    transition: all 0.5s ease-in-out;
    opacity: ${show ? 1 : 0};
    position: absolute;
    top: 0;
    left: ${show ? "0px" : "-200px"};
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    padding: 15px 0px;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 50px;
    padding: 0px 10px;
`;

export const menuButton = css`
    box-sizing: border-box;
    border: none;
    padding: 10px;
    background-color: transparent; // 뒷배경 색상을 쓴다.
    cursor: pointer;

    & > * {
        font-size: 16px;
    }
`;