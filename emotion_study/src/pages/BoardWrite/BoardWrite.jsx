/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useRef, useState } from "react";

const layout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 120px;
    border: 1px solid #dbdbdb;
    padding: 50px 0px;
`;

const headerTitle = css`
    margin-bottom: 30px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
`;

const boardTitle = css`
    box-sizing: border-box;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #ccc;
    width: 90%;
    padding: 10px;
`;

const submitButton = css`
    box-sizing: border-box;
    margin-top: 52px;
    border: 1px solid #ccc;
    width: 90%;
    padding: 10px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #fafafa;
    }

    &:active {
        background-color: #eee;
    }
`;

function BoardWrite() {
    const boardIdRef = useRef();

    const [board, setBoard] = useState({
        boardId: 0,
        boardTitle: "",
        boardContent: "",
    });

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        const { value } = e.target;

        if (!value.length > 20) {
            e.target.value = inputValue;
            return;
        }

        setInputValue((inputValue) => value);
    };

    const handleSubmitClick = () => {};
    return (
        <div css={layout}>
            <h1 css={headerTitle}>글 작성하기</h1>
            <input
                type="text"
                css={boardTitle}
                placeholder="제목을 입력하세요."
                onChange={handleInputChange}
            />
            <ReactQuill
                style={{ width: "90%", height: "400px" }}
                modules={QUILL_MODULES}
            />
            <button css={submitButton} onClick={handleSubmitClick}>
                작성하기
            </button>
        </div>
    );
}

export default BoardWrite;
