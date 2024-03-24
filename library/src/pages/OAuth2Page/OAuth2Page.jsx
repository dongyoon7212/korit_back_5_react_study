/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { Link, useSearchParams } from "react-router-dom";

function OAuth2Page(props) {
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    const provider = searchParams.get("provider");

    return (
        <div>
            <h1>계정 통합</h1>
            <p>이미 Library의 계정을 가지고 계신가요?</p>
            <Link
                css={s.oauth2Button}
                to={`/auth/oauth2/merge?name=${name}&provider=${provider}`}
            >
                계정 통합하기
            </Link>
            <h1>회원가입</h1>
            <p>새로 가입하고 싶으신가요?</p>
            <Link
                css={s.oauth2Button}
                to={`/auth/oauth2/signup?name=${name}&provider=${provider}`}
            >
                회원가입하기
            </Link>
        </div>
    );
}

export default OAuth2Page;
