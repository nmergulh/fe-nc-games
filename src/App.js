import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Homepage from "./components/homepage/Homepage";
import Singlereviewpage from "./components/reviewpage/Singlereviewpage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reviews" element={<Homepage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="categories/:category_name" element={<Homepage />} />
          <Route path="/reviews/:review_id" element={<Singlereviewpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
