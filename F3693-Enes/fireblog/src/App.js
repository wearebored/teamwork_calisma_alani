import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Dashboard from "./pages/Dashboard/Dashboard";
import Details from "./pages/Details/Details";
import Login from "./pages/Login/Login";
import NewBlog from "./pages/NewBlog/NewBlog";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/newblog" element={<NewBlog/>} />
          <Route path="/details" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/updateblog" element={<UpdateBlog />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
