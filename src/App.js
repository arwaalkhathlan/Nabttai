import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';
import OurProducts from './Pages/OurProducts';
import AboutUs from './Pages/AboutUs';
import ProductsPage from './Pages/ProductsPage';
import PlantsStories from './Pages/PlantsStories';
// import FormsBox from './components/FormsBox';
function App() {
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
