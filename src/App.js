import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import ReviewList from "./components/reviewlist/ReviewList";
import Categories from "./components/categories/Categories";
import Homepage from "./components/homepage/Homepage";
import Reviewpage from "./components/reviewpage/Reviewpage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="categories/:category_name" element={<Homepage />} />
          <Route path="/reviews/:review_id" element={<Reviewpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
