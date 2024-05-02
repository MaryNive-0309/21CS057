import { Route,Router } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (

    <div className="App">
      <Router>
        <Route path="/numbers" element={<Home/>}/>
      </Router>
    </div>
  );
}

export default App;
