/** @jsxImportSource @emotion/react */
import * as S from "./style";

function Mypage() {
    return (
        <div css={S.layout}>
            <h1 css={S.title}>마이페이지</h1>
            <div css={S.profileImg}>
                <img src="" alt="" />
            </div>
            <input css={S.nickname} type="text" />
            <div css={S.profileInputLayout}>
                <input css={S.profileInput} type="text" />
                <input css={S.profileInput} type="text" />
                <input css={S.profileInput} type="text" />
                <input css={S.profileInput} type="text" />
            </div>
            <div css={S.buttonLayout}>
                <button css={S.button}>수정하기</button>
            </div>
        </div>
    );
}

export default Mypage;
