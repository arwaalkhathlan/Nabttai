import { Container } from "react-bootstrap";
import Header from "../components/Header";
import searchIcon from '../images/search 1.svg';
import logo from '../images/greenLogo.svg';
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import UserReviewPage from "../components/UserReviewPage";


function Home() {
return(
    <>
    <div className="main-hero pb-3">
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

    <UserReviewPage />

    <Footer />
    </>
);
}
export default Home;