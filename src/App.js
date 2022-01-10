import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import ReviewList from "./components/ReviewList";
import ReviewCard from "./components/ReviewCard";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <h1 className="header">NC Games Reviews</h1>
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
