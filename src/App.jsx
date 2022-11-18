import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import {Search} from './components/Search';
import WishList from './components/WishList';

function App() {
  return (
    <Router>
      <div>
        <nav>
            <Link to="/" ><span id="navItem" style={{marginRight:"15px"}}>Home</span></Link>
            <Link to="/search"><span id="navItem" style={{marginRight:"15px"}}>Search</span></Link>
            <Link to="/wishlist"><span id="navItem" style={{marginRight:"15px"}}>Wish List</span></Link>
        </nav>
        <Routes>
          <Route path="/search" element={<Search/>}>
          </Route>
          <Route path="/wishlist" element={<WishList/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;