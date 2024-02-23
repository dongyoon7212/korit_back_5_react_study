import { css } from "@emotion/react";

export const layout = css`
    padding: 100px 30px 0px;
`;

export const profileHeader = css`
    box-sizing: border-box;
    margin: 0px auto 20px;
    padding: 30px;
    border: 1px solid #dbdbdb;
    width: 700px;
    box-shadow: 1px 1px 5px #00000022;
`;

export const title = css`
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`;

export const profileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 20px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 200px;
    height: 200px;

    overflow: hidden;
    cursor: pointer;
    & > img {
        width: 100%;
    }
`;

export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const nickname = css`
    border: none;
    outline: none;
    border-bottom: 2px solid #dbdbdb;
    padding: 5px 10px 3px;
    text-align: center;
    width: 200px;
    font-size: 18px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:focus {
        border-bottom: 2px solid #5dd6ff;
        /* background-color: #fafafa; */
    }
`;

export const profileInputLayout = css`
    box-sizing: border-box;
    margin: 0 auto 20px;
    border: 1px solid #dbdbdb;
    box-shadow: 1px 1px 5px #00000022;
    width: 700px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const inputBox = css`
    position: relative;
    margin-bottom: 10px;
`;

export const profileInput = css`
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding: 20px 20px 10px;
    font-size: 16px;

    width: 335px;
    &:nth-of-type(3n),
    &:nth-of-type(4n) {
        margin: 0;
    }

    &:focus {
        outline: 2px solid #5dd6ff;
    }

    & + label {
        position: absolute;
        transform: translateY(-50%);
        top: 54%;
        left: 23px;
        font-weight: 600;
        color: #333;
        transition: all 0.2s ease-in-out;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
        top: 13px;
        left: 23px;
        font-size: 11px;
    }
`;

export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 버튼 크기는 padding으로만 잡기, input도 마찬가지
export const profileButton = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    width: 700px;
    height: 50px;
    box-shadow: 1px 1px 5px #00000022;

    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eee;
    }
`;
