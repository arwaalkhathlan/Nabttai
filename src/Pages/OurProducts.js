import { Container } from "react-bootstrap";
import Prodcuts from "../components/Products";
import Header from "../components/Header";
function OurProducts() {
    return (
        <>
        <Header />
            <div className="caption text-center py-4">
                <h2>منجاتنا</h2>
                <p>وصف قصير وصف قصير وصف قصير</p>
            </div>
            <Container>
                <Prodcuts />
            </Container>
        </>
    )
}
export default OurProducts;