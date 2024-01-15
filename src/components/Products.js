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
                <Col className="my-3" sm={12} md={6} lg={4}>
                    <Card className="rounded-3 h-100 p-2">
                        <Link to={`/ProdcutPage/1`} className="text-decoration-none">
                            <Card.Img className="rounded-3" variant="top" src={sabara} />
                        </Link>
                        <Card.Body className="px-0 d-flex flex-column justify-content-between py-3">
                            <div className="d-flex fw-bold justify-content-between">
                                <Card.Title>صبرا</Card.Title>
                                <span>50 ريال</span>
                            </div>
                            <Card.Text>
                                نبات صبار صغير مزين بزهور وردية اللون في حوض زجاجي يحتوي على رمل و أحجار ملونة.
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Link to={`/ProdcutPage/1`} className="btn-card flex-fill" variant="primary">المزيد من التفاصيل</Link>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-3" sm={12} md={6} lg={4}>
                    <Card className="rounded-3 h-100 p-2">
                        <Link to={`/ProdcutPage/2`} className="text-decoration-none">
                            <Card.Img className="rounded-3" variant="top" src={Fee} />
                        </Link>
                        <Card.Body className="px-0 d-flex flex-column justify-content-between py-3">
                            <div className="d-flex fw-bold justify-content-between">
                                <Card.Title>فيّ</Card.Title>
                                <span>150 ريال</span>
                            </div>
                            <Card.Text>
                                نبتة الألوفيرا حجم صغير في حوض من الفخار
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Link to={`/ProdcutPage/2`} className="btn-card flex-fill" variant="primary">المزيد من التفاصيل</Link>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="my-3" sm={12} md={6} lg={4}>
                    <Card className="rounded-3 h-100 p-2">
                        <Link to={`/ProdcutPage/3`} className="text-decoration-none">
                            <Card.Img className="rounded-3" variant="top" src={Nassem} />
                        </Link>
                            <Card.Body className="px-0 d-flex flex-column justify-content-between py-3">
                                <div className="d-flex fw-bold justify-content-between">
                                    <Card.Title>نسيم</Card.Title>
                                    <span>250 ريال</span>
                                </div>
                                <Card.Text>
                                    نبتة بونساي حجم صغير في حوض حجري
                                </Card.Text>
                                <div className="card-bottom d-flex">
                                    <Link to={`/ProdcutPage/3`} className="btn-card flex-fill" variant="primary">المزيد من التفاصيل</Link>
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