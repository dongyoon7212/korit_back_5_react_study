/** @jsxImportSource @emotion/react */
import * as s from "./style";
import img from "../../assets/bio-photo.jpg";
import { useMutation, useQueryClient } from "react-query";
import { sendAuthMailRequest } from "../../apis/api/sendAuthMail";
import { FaCheckCircle } from "react-icons/fa";
import FullSizeLoader from "../../components/FullSizeLoader/FullSizeLoader";
import { useAuthCheck } from "../../hooks/useAuthCheck";

function MyPage() {
    useAuthCheck();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    const sendAuthMailMutation = useMutation({
        mutationKey: "sendAuthMailMutation",
        mutationFn: sendAuthMailRequest,
        retry: 0,
        onSuccess: (response) => {
            if (response.data) {
                alert("인증 메일을 확인해주세요.");
            } else {
                alert("인증 메일 전송을 실패했습니다.");
            }
        },
    });

    const handleSendAuthMailClick = () => {
        sendAuthMailMutation.mutate();
    };

    return (
        <>
            {sendAuthMailMutation.isLoading ? (
                <FullSizeLoader />
            ) : (
                <div css={s.layout}>
                    <div css={s.header}>
                        <div css={s.imgBox}>
                            <div css={s.profileImg}>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div css={s.infoBox}>
                            <div css={s.infoText}>
                                사용자 이름 : {principalData?.data.username}
                            </div>
                            <div css={s.infoText}>
                                이름 : {principalData?.data.name}
                            </div>
                            <div css={s.emailBox}>
                                <div css={s.infoText}>
                                    이메일 : {principalData?.data.email}
                                </div>
                                {principalData?.data.authorities.filter(
                                    (auth) => auth.authority === "ROLE_USER"
                                ).length === 0 ? (
                                    <button
                                        css={s.infoButton}
                                        onClick={handleSendAuthMailClick}
                                    >
                                        인증하기
                                    </button>
                                ) : (
                                    <div css={s.emailCheck}>
                                        <FaCheckCircle />
                                    </div>
                                )}
                            </div>
                            <div css={s.infoButtons}>
                                <button css={s.infoButton}>정보 수정</button>
                                <button css={s.infoButton}>
                                    비밀번호 수정
                                </button>
                            </div>
                        </div>
                    </div>
                    <div css={s.bottom}></div>
                </div>
            )}
        </>
    );
}

export default MyPage;
