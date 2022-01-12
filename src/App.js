import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import ReviewList from "./components/reviewlist/ReviewList";
import Categories from "./components/Categories";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" />
          <Route path="/reviews" element={<ReviewList />} />
          <Route
            path="/reviews/categories/:category_name"
            element={<ReviewList />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
