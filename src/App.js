import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Pagination from './components/Pagination';
import Home from './components/Home';
import Navbar from './components/BlogNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from './components/Posts'; // Corrected the import statement
import { Container, Nav, Row } from 'react-bootstrap';
import BlogNavbar from './components/BlogNavbar';
import ReadPost from './components/ReadPost';
import Hero from './components/Hero';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzA12FUVX310CJmCapSm07SnpJef8486qhLnuZ2cdeRh0821uK6FUUV!"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {/* <BlogNavbar /> */}
          <Hero/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/navbar" element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
