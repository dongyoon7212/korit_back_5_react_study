import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../apis/api/principal";

// useQuery => GET 요청시에 사용
// 첫번째 매개변수 => 배열 ["key값", dependency]
// 두번째 매개변수 => 요청메소드(async, await)
// 세번째 매개변수 => 옵션
//  {
//      retry: 0,
//      refetchOnWindowFocus: false, 화면이 포커스 될때마다 재요청
//      onSuccess: 함수,
//      onError: 함수,
//      enabled: true or false
//  }

function AuthRoute(props) {
    const getPrincipal = useQuery(["getPrincipal"], getPricipalRequest, {
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("getPrincipal 요청");
            console.log(response);
        },
    });

    return (
        <Routes>
            <Route path="/auth/*" element={<AuthPage />} />
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}

export default AuthRoute;
