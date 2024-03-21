/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import SignupPage from "../SignupPage/SignupPage";
import Signin from "../SigninPage/Signin";
import OAuth2Page from "../OAuth2Page/OAuth2Page";
import OAuth2SignupPage from "../OAuth2SignupPage/OAuth2SignupPage";
import OAuth2SigninPage from "../OAuth2SigninPage/OAuth2SigninPage";
import { useEffect } from "react";
import { useQueryClient } from "react-query";

function AuthPage() {
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");

    useEffect(() => {
        if (!!principalData) {
            alert("잘못된 접근입니다.");
            window.location.replace("/");
        }
    }, []);

    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/oauth2" element={<OAuth2Page />} />
                <Route path="/oauth2/signin" element={<OAuth2SigninPage />} />
                <Route path="/oauth2/merge" />
                <Route path="/oauth2/signup" element={<OAuth2SignupPage />} />
            </Routes>
        </div>
    );
}

export default AuthPage;
