import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import { YouTube } from "@mui/icons-material";
import { Box, Github, Instagram, Linkedin } from "react-bootstrap-icons";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tech from "./components/Tech";
import Love from "./components/Love";
import Spiritual from "./components/Spiritual";
import Travel from "./components/Travel";
import Home from "./components/Home";
import ReadPost from "./components/ReadPost";
import CreatePost from "./components/CreatePost";
import BlogNavbar from "./components/BlogNavbar";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Footer from "./components/Footer";
import TabsNav from "./components/TabsNav";
import { useEffect, useState } from "react";
// import FooterComponent from "./components/FooterComponent";
import SixtySquares from "./components/SixtySquares";
import ReactMachineCoding from "./components/ReactMachineCoding";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzA12FUVXJi0CjmCapSm075np3ef0486qhLnuZ2cdeRh0021uK6FUUVM"
  crossorigin="anonymous"
/>

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentuser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  // const location = useLocation();
  return (
    // <SixtySquares/>
    <div>
      <Provider store={store}>
        <BrowserRouter>
          {/* {location.pathname == "/" && <TabsNav />} */}
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/createpost" element={<CreatePost />} />
            </Route>
            <Route path="/createpost/:postId" element={<CreatePost />} />
            <Route path="/" element={<Home />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/posts/:postId" element={<ReadPost />} />
            <Route path="/spiritual" element={<Spiritual />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/love" element={<Love />} />
            <Route path="/readpost" element={<ReadPost />} />
            <Route path="/reactMachineCoding" element={<ReactMachineCoding />} />

          </Routes>
        </BrowserRouter>

      </Provider>
      {/* <FooterComponent /> */}

    </div>
  );
}

export default App;
