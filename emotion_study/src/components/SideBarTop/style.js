import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    right: 0;
    top: ${isShow ? "0px" : "-70px"};
    transition: top 0.5s ease-in-out;
    width: 50%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-bottom-left-radius: 10px;
    box-shadow: 1px 0px 5px #00000022;
`;

export const menuList = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const menuItem = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 40px;
    text-decoration: none;
    font-weight: 600;
    color: black;
    &:nth-of-type(1) {
        margin-right: 20px;
    }
    &:nth-of-type(2) {
        margin-right: 20px;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 70px;
    right: 30px;
    width: 30px;
    height: 20px;
    padding: 0;
    border: 1px solid #dbdbdb;
    background-color: white;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;
