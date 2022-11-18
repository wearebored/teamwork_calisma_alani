import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/details" element={<Details/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/newblog" element={<NewBlog/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/updateblog" element={<UpdateBlog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
