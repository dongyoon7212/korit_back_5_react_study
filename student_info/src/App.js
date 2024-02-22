import { Link, Route, Routes } from "react-router-dom";
import Memoization from "./pages/Memoization";
import StudentPage from "./pages/StudentPage";
import StudentArrayPage from "./pages/StudentArrayPage";
import StudentArrayPage3 from "./pages/StudentArrayPage3";

function App() {
    return (
        <>
            <ul>
                <Link to={"/memoization"}>
                    <li>메모이제이션</li>
                </Link>
                <Link to={"/st"}>
                    <li>학생정보</li>
                </Link>
                <Link to={"/sta1"}>
                    <li>학생들정보1</li>
                </Link>
                <Link to={"/sta3"}>
                    <li>학생들정보3</li>
                </Link>
            </ul>
            <Routes>
                <Route path="/memoization" element={<Memoization />} />
                <Route path="/st" element={<StudentPage />} />
                <Route path="/sta1" element={<StudentArrayPage />} />
                <Route path="/sta3" element={<StudentArrayPage3 />} />
            </Routes>
        </>
    );
}

export default App;
