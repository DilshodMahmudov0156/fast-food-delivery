import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import RouterPart from "./parts/router-part";

function App() {
  return (
    <div className="App">
        <Router>
            <RouterPart/>
        </Router>
    </div>
  );
}

export default App;
