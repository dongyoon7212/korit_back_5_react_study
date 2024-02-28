/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`;

const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

const boardListLayout = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    width: 900px;
    height: 500px;
`;

const boardListHeader = css`
    box-sizing: border-box;
    display: flex;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    & > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 40px;
        font-weight: 700;
        cursor: default;
    }
    & > div:nth-of-type(1) {
        flex-grow: 0;
        border-right: 1px solid #dbdbdb;
        width: 80px;
    }
`;

function BoardList() {
    return (
        <div css={layout}>
            <h1 css={headerTitle}>게시글 목록</h1>
            <ul css={boardListLayout}>
                <li css={boardListHeader}>
                    <div>번호</div>
                    <div>제목</div>
                </li>
                <Link to={"/board/1"}>
                    <li css={boardListHeader}>
                        <div>1</div>
                        <div>test1</div>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default BoardList;
