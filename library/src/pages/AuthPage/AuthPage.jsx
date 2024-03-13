/** @jsxImportSource @emotion/react */
import { Route, Routes } from "react-router-dom";
import * as s from "./style";

function AuthPage() {
    return (
        <div css={s.layout}>
            <Routes>
                <Route path="/signin" />
                <Route path="/signup" />
                <Route path="/signup/oauth" />
            </Routes>
        </div>
    );
}

export default AuthPage;
