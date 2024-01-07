import './css/readyclasses.css'
import './css/index.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/OurProducts' element={<OurProducts />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ProdcutPage/:ProductId' element={<ProductsPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
