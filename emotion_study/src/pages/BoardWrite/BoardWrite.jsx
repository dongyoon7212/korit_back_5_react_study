/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ReactQuill from "react-quill";
import { QUILL_MODULES } from "../../constants/quillModules";
import { useMaxSizeValidateInput } from "../../hooks/inputHook";
import { useQuillInput } from "../../hooks/quillHook";
import { useNavigate } from "react-router-dom";
import { useLoadList } from "../../hooks/boardListHook";

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
    const navigate = useNavigate();
    // Custom Hook
    const [inputValue, handleInputChange] = useMaxSizeValidateInput(20);
    const [quillValue, handleQuillValueChange] = useQuillInput();
    const { boardList, lastId } = useLoadList;
    // 변수명만 바꾸면 재사용 가능
    // const [inputValue2, handleInputChange2] = useInput();

    const handleSubmitClick = () => {
        let newBoardList = [];
        for (let i = 0; i < 203; i++) {
            const board = {
                boardId: i + 1,
                boardTitle: inputValue + (i + 1),
                boardContent: quillValue,
            };
            newBoardList = [...newBoardList, board];
        }

        localStorage.setItem("boardList", JSON.stringify(newBoardList));
        alert("게시글 저장 완료");
        navigate("/board/list");
    };

    return (
        <div css={layout}>
            <h1 css={headerTitle}>글 작성하기</h1>
            <input
                type="text"
                css={boardTitle}
                placeholder="제목을 입력하세요."
                onChange={handleInputChange}
                value={inputValue}
            />
            <ReactQuill
                style={{ width: "90%", height: "400px" }}
                modules={QUILL_MODULES}
                onChange={handleQuillValueChange}
            />
            <button css={submitButton} onClick={handleSubmitClick}>
                작성하기
            </button>
        </div>
    );
}

export default BoardWrite;
