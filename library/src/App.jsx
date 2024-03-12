import RootContainer from "./components/RootContainer/RootContainer";
import RootHeader from "./components/RootHeader/RootHeader";
import RootLayout from "./components/RootLayout/RootLayout";

function App() {
    return (
        <RootLayout>
            <RootContainer>
                <RootHeader />
            </RootContainer>
        </RootLayout>
    );
}

export default App;
