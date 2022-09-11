import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" index element={<ProductListing />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
