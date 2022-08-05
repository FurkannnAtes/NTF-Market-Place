import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Author from "./pages/author/Author";
import CreateYours from "./pages/createYours/CreateYours";
import Explore from "./pages/explore/Explore";


import Home from "./pages/home/Home";
import ItemDetails from "./pages/itemDetails/ItemDetails";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/ItemDetails" element={<ItemDetails />} />
          <Route path="/Author" element={<Author />} />
          <Route path="/CreateYours" element={<CreateYours />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
