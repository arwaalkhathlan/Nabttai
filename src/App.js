import React, { useEffect } from 'react';
import Home from './Pages/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
import ProductsPage from './Pages/ProductsPage';
import PlantsStories from './Pages/PlantsStories';
import ReactGA from 'react-ga';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('YOUR_TRACKING_ID'); // Replace with your Google Analytics tracking ID
  }, []);

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <div className="App">
      {/* <FormsBox /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OurProducts' element={<OurProducts />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ProdcutPage/:ProductId' element={<ProductsPage />} />
        <Route path='/PlantsStories/:ProductId' element={<PlantsStories />} />
      </Routes>
    </div>
  );
}

export default App;
