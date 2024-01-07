import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import sabara from '../images/sabra.png';
import Fee from '../images/fe.jpeg';
import Nassem from '../images/naseem.jpeg';
import like from '../images/likeicon.svg'
function Prodcuts() {
    return (
        <>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card className="border-0">
                        <Card.Img className="rounded-0" variant="top" src={sabara} />
                        <Card.Body className="px-0 py-3">
                            <Card.Title className="fw-bold">صبرا</Card.Title>
                            <Card.Text>
                                وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Link to={`/ProdcutPage/1`} className="btn-card flex-fill" variant="primary">اضف إلى السلة</Link>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="border-0">
                        <Card.Img className="rounded-0" variant="top" src={Fee} />
                        <Card.Body className="px-0 py-3">
                            <Card.Title className="fw-bold">فيّ</Card.Title>
                            <Card.Text>
                                وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Link to={`/ProdcutPage/2`} className="btn-card flex-fill" variant="primary">اضف إلى السلة</Link>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className="border-0">
                        <Card.Img className="rounded-0" variant="top" src={Nassem} />
                        <Card.Body className="px-0 py-3">
                            <Card.Title className="fw-bold">نسيم</Card.Title>
                            <Card.Text>
                                وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Link to={`/ProdcutPage/3`} className="btn-card flex-fill" variant="primary">اضف إلى السلة</Link>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
export default Prodcuts;