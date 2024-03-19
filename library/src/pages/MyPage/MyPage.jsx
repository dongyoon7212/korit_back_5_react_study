/** @jsxImportSource @emotion/react */
import * as s from "./style";
import img from "../../assets/bio-photo.jpg";
import { useQueryClient } from "react-query";

function MyPage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <div css={s.imgBox}>
                    <div css={s.profileImg}>
                        <img src={img} alt="" />
                    </div>
                </div>
                <div css={s.infoBox}>
                    <div css={s.infoText}>
                        사용자 이름 : {principalData.data.username}
                    </div>
                    <div css={s.infoText}>이름 : {principalData.data.name}</div>
                    <div>
                        <div css={s.infoText}>이메일 : {principalData.data.email}</div>
                        <button>인증하기</button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div css={s.bottom}></div>
        </div>
    );
}

export default MyPage;
