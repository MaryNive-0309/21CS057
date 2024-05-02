import { Router,Route } from "react-router-dom";
import Products from "./Components/Products";
import ProductDetail from "./Components/ProductDetail";

function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" element={<Products/>}/>
      <Route path="/product/:productId" element={<ProductDetail/>}/>
    </Router>
    </div>
  );
}

export default App;
