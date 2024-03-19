import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../apis/api/principal";
import RootSideMenuLeft from "../components/RootSideMenuLeft/RootSideMenuLeft";
import RootHeader from "../components/RootHeader/RootHeader";

// useQuery => GET 요청시에 사용
// 첫번째 매개변수 => 배열 ["key값", dependency]
// 두번째 매개변수 => 요청메소드(async, await)
// 세번째 매개변수 => 옵션
//  {
//      retry: 0, ====> 요청 실패시 재시도 횟수
//      refetchOnWindowFocus: false, ====> 화면이 포커스 될때마다 재요청
//      onSuccess: 함수,
//      onError: 함수, ===> retry후 error처리
//      enabled: true or false
//  }

// react query가 요청을 실패시 여러번 재시도를 해봄

function AuthRoute(props) {
    const principalQuery = useQuery(["principalQuery"], getPricipalRequest, {
        retry: 3,
        refetchOnWindowFocus: false,
        onSuccess: (response) => {
            console.log("onSuccess");
            console.log(response);
        },
        onError: (error) => {
            console.log("오류");
            console.log(error);
        },
    });

    return (
        <>
            <RootSideMenuLeft />
            <RootHeader />
            {principalQuery.isLoading ? (
                <h1>로딩중...</h1>
            ) : (
                <Routes>
                    <Route path="/auth/*" element={<AuthPage />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            )}
        </>
    );
}

export default AuthRoute;
