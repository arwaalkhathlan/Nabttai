import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from '../images/greenLogo.svg';
import palm from '../images/palm.png';
import searchIcon from '../images/search 1.svg';

import '../css/readyclasses.css';
import '../css/index.css';
import '../css/products.css';

import Footer from '../components/Footer';
import UserReviewPage from "../components/UserReviewPage";
import FamousPlant from '../components/FamousPlant';
import Prodcuts from '../components/Products';
import Header from "../components/Header";

function Home() {
    return (
        <>
            <div className="main-hero border-bottom-rad pb-3">
                <span className="right-leaf"></span>
                <span className="left-leaf"></span>
                <Header />
                <Container className="text-center position-relative">
                    <div className="search-div">
                        <input type="search" placeholder="البحث" />
                        <img className="search-icon" src={searchIcon} alt="search-icon" />
                    </div>
                    <div className="text-hero">
                        <div className="title my-3">
                            <h1>مرحباً بك في </h1>
                            <img src={logo} alt="logo" />
                        </div>
                        <p> المكان المثالي لاكتشاف عالم النباتات <span>وجمالها!</span></p>
                        <div className="d-flex gap-4 justify-content-center pb-3">
                            <Link className="link-hero">اكتشف الان</Link>
                            <Link className="link-hero">اقتني الان</Link>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="famous-plants">
                <Container className=" position-relative">
                    <div className="caption text-center py-4">
                        <h2>أشهر النباتات الاقتصادية في السعودية</h2>
                        <p>وصف قصير وصف قصير وصف قصير</p>
                    </div>
                    <span className="palm left-palm"><img src={palm} alt="palm" /></span>
                    <span className="palm right-palm"><img src={palm} alt="palm" /></span>
                </Container>
                    <FamousPlant />
            </div>
            <div className="caption text-center py-4">
                <h2>منجاتنا</h2>
                <p>وصف قصير وصف قصير وصف قصير</p>
            </div>
            <Container>
                <Prodcuts />
            </Container>

            <Container className="review-container">
                <label className="review_title" >العملاء</label>
                <text className="review_sub-title">  في نبتتي نحرص على أراكم </text>
                <UserReviewPage />
            </Container>

            <Footer />



        </>
    );
}
export default Home;