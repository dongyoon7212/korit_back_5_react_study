import { Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import HomePage from "../pages/HomePage/HomePage";
import { useQuery } from "react-query";
import { getPricipalRequest } from "../apis/api/principal";
import RootSideMenuLeft from "../components/RootSideMenuLeft/RootSideMenuLeft";
import RootHeader from "../components/RootHeader/RootHeader";
import FullSizeLoader from "../components/FullSizeLoader/FullSizeLoader";
import MyPage from "../pages/MyPage/MyPage";
import PageContainer from "../components/PageContainer/PageContainer";

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

function AuthRoute() {
    const principalQuery = useQuery(["principalQuery"], getPricipalRequest, {
        retry: 0,
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
            <PageContainer>
                {principalQuery.isLoading ? (
                    <FullSizeLoader size={20} />
                ) : (
                    <Routes>
                        <Route path="/auth/*" element={<AuthPage />} />
                        <Route path="/" element={<HomePage />} />
                        <Route path="/account/mypage" element={<MyPage />} />
                    </Routes>
                )}
            </PageContainer>
        </>
    );
}

export default AuthRoute;
