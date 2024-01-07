// import { Container } from "react-bootstrap";
import Header from "../components/Header";
// import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import UserReviewPage from "../components/UserReviewPage";
import ProductCard from "../components/Product_card";
import '../css/products.css';

function ProductsPage() {
    return(
        <>
         <Header/>
         <ProductCard/>
         <div className="review-container">
           <label className="review_title" >المراجعات</label>
           <br/>
           <text className="review_sub-title">  في نبتتي نحرص على أراكم </text>
           <UserReviewPage />
         </div>

            <Footer/>
        </>
    )
}
export default ProductsPage;