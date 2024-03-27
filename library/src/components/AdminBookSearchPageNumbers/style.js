import { css } from "@emotion/react";

export const layout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    width: 100%;
`;

export const pageNumbers = css`
    display: flex;
`;

export const pageButton = (isSelected) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;
    border: ${isSelected ? "none" : "1px solid #dbdbdb"};
    border-radius: 2px;
    min-width: 25px;
    height: 25px;
    background-color: ${isSelected ? "#dbdbdb" : "white"};
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
    color: ${isSelected ? "#777777" : "#777777"};
`;

export const pageCount = css``;
