import { css } from "@emotion/react";

export const layout = css`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const inputBox = css`
    width: 40%;
`;

export const button = css`
    margin-top: 10px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    width: 100%;
    height: 35px;
    font-size: 14px;
    font-weight: 600;
    background-color: white;

    &:hover {
        background-color: #fafafa;
    }
`;
