import "./App.css";
import UserComponent from "./components/UserComponent";
import ResourceComponent from "./components/ResourceComponent";
import logo from "./logo.svg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
            </header>
            <header className="my-app">
                homework by Stanislav 
            </header>
            <div>ResourceComponent</div>
            <div>
                <ResourceComponent></ResourceComponent>
            </div>
            <div>UserComponent</div>
            <div>
                <UserComponent></UserComponent>
            </div>
        </div>
    );
}

export default App;
