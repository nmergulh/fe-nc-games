import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Categories from "./components/categories/Categories";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Singlereviewpage from "./components/reviewpage/Singlereviewpage";
import Loginpage from "./components/loginpage/Loginpage";
import { Errorpage } from "./components/errorpage/Errorpage";
import { UserProvider } from "../src/contexts/userContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="*" element={<Errorpage />} />
            <Route path="/dashboard/:username" element={<Dashboard />} />
            <Route path="/" element={<Loginpage />} />
            <Route path="/reviews" element={<Homepage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="categories/:category_name" element={<Homepage />} />
            <Route path="/reviews/:review_id" element={<Singlereviewpage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
