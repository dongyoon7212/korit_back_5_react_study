import { css } from "@emotion/react";

export const inputBox = css`
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
`;

export const input = css`
    box-sizing: border-box;
    outline: none;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px 20px;
    width: 100%;
    background-color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`;

export const messageBox = (type) => css`
    padding: 5px 20px;
    width: 100%;
    color: ${type === "error" ? "#ff6161" : "#63ff80"};
    font-size: 14px;
    font-weight: 600;
`;
