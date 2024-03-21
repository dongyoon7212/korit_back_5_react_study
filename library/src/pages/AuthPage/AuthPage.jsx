/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";
import SignupPage from "../SignupPage/SignupPage";
import Signin from "../SigninPage/Signin";

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/oauth2/merge" />
                <Route path="/oauth2/signup" />
            </Routes>
        </div>
    );
}

export default AuthPage;
