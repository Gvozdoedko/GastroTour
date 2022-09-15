import "./App.scss";
import Header from "./components/Header/Header";
import IntroTemplate from "./components/introSection/IntroTemplate";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header></Header>
                <IntroTemplate></IntroTemplate>
            </div>
        </div>
    );
}

export default App;
