/** @jsxImportSource @emotion/react */
import * as S from "./style";
import logo512 from "./logo512.png";

function Mypage() {
    return (
        <div css={S.layout}>
            <h1 css={S.title}>마이페이지</h1>
            <div css={S.profileImg}>
                <img src={logo512} alt="" />
            </div>

            <div css={S.nicknameLayout}>
                <input css={S.nickname} type="text" />
            </div>
            <div css={S.profileInputLayout}>
                <input css={S.profileInput} type="text" />
                <input css={S.profileInput} type="text" />
                <input css={S.profileInput} type="text" />
                <input css={S.profileInput} type="text" />
            </div>
            <div css={S.buttonLayout}>
                <button css={S.profileButton}>수정하기</button>
            </div>
        </div>
    );
}

export default Mypage;
