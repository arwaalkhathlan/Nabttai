import { Container } from "react-bootstrap";
import Prodcuts from "../components/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
function OurProducts() {
    return (
        <>
        <Header />
            <div className="caption text-center py-4">
            <h2 className="fw-bold">منتجاتنا</h2>
                <p className="descrp">نقدم في نبتتي أفضل النباتات الداخلية</p>
            </div>
            <Container className="py-4">
                <Prodcuts />
            </Container>
            <Footer />
        </>
    )
}
export default OurProducts;