import { css } from "@emotion/react";

export const layout = css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const setting = css`
    position: absolute;
    border: none;
    font-size: 18px;
    right: 10px;
    top: 10px;
    background-color: transparent;
    cursor: pointer;
`;

export const userImg = css`
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    overflow: hidden;
`;

export const userInfo = css`
    padding-top: 5px;
    font-size: 14px;
    font-weight: 600;
`;

export const loginButton = css`
    width: 120px;
    padding: 3px 20px;
    border: 1px solid #dbdbdb;
    font-size: 20px;
    font-weight: 600;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        background-color: #dbdbdb;
    }
`;
