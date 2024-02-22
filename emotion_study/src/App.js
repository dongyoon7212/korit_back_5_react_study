import { Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <>
            <Reset />
            <SideBar />
            <Routes>
                <Route />
                <Route />
                <Route />
            </Routes>
        </>
    );
}

export default App;
