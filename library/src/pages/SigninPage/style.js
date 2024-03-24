import { css } from "@emotion/react";

export const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const signupText = css`
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #222;

    &:hover {
        font-weight: 700;
    }
`;

export const oauthBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > a {
        box-sizing: border-box;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #dbdbdb;
        width: 100%;
        height: 35px;
        text-decoration: none;
        font-size: 14px;
        font-weight: 700;
        color: white;
    }

    & > a:nth-of-type(1) {
        background-color: rgb(247, 207, 70);
        margin-top: 10px;
    }
    & > a:nth-of-type(2) {
        background-color: rgb(83, 131, 236);
    }
    & > a:nth-of-type(3) {
        background-color: rgb(94, 204, 106);
    }
`;
