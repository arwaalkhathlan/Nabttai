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
                            <div className="d-flex fw-bold justify-content-between">
                                <Card.Title>صبرا</Card.Title>
                                <span>50 ريال</span>
                            </div>
                            <Card.Text>
                            نبات صبار صغير مزين بزهور وردية اللون في حوض زجاجي يحتوي على رمل و أحجار ملونة. 
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
                            <div className="d-flex fw-bold justify-content-between">
                                <Card.Title>فيّ</Card.Title>
                                <span>150 ريال</span>
                            </div>
                            <Card.Text>
                                نبتة الألوفيرا حجم صغير في حوض من الفخار
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
                            <div className="d-flex fw-bold justify-content-between">
                                <Card.Title>نسيم</Card.Title>
                                <span>250 ريال</span>
                            </div>
                            <Card.Text>
                                نبتة بونساي حجم صغير في حوض حجري
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