import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: ${isShow ? "0px" : "-300px"};
    
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 1px solid black;

    width: 300px;
    height: 100%;
    transition: left 0.5s ease-in-out;
    background-color: white;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 15px;
    height: 50px;
    cursor: pointer;
    background-color: white;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #ccc;
    }
`;
