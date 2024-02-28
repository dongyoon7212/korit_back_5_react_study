/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemo } from "react";
import ReactQuill from "react-quill";

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 120px;
    border: 1px solid #dbdbdb;
    padding: 50px 0px;
`;

const title = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

function BoardWrite() {
    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ font: [] }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ color: [] }, { background: [] }],
                [{ align: [] }],
                ["code-block"],
            ],
        };
    }, []);

    return (
        <div css={layout}>
            <h1 css={title}>글 작성하기</h1>
            <ReactQuill
                style={{ width: "90%", height: "400px" }}
                modules={modules}
            />
        </div>
    );
}

export default BoardWrite;
