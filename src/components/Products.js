import { Col, Row, Card, Button } from "react-bootstrap";
import sabara from '../images/sabra.png';
import Fee from '../images/fe.jpeg';
import Nassem from '../images/naseem.jpeg';
import like from '../images/likeicon.svg'
function Prodcuts() {
    return (
        <>
            <Row>
                <Col>
                    <Card className="border-0">
                        <Card.Img className="rounded-0" variant="top" src={sabara} />
                        <Card.Body className="px-0 py-3">
                            <Card.Title className="fw-bold">صبرا</Card.Title>
                            <Card.Text>
                                وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Button className="btn-card flex-fill" variant="primary">اضف إلى السلة</Button>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0">
                        <Card.Img className="rounded-0" variant="top" src={Fee} />
                        <Card.Body className="px-0 py-3">
                            <Card.Title className="fw-bold">فيّ</Card.Title>
                            <Card.Text>
                                وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Button className="btn-card flex-fill" variant="primary">اضف إلى السلة</Button>
                                <img className="like-icon" src={like} alt="likeIcon" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="border-0">
                        <Card.Img className="rounded-0" variant="top" src={Nassem} />
                        <Card.Body className="px-0 py-3">
                            <Card.Title className="fw-bold">نسيم</Card.Title>
                            <Card.Text>
                                وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج  وصف المنتج وصف المنتج وصف المنتج وصف المنتج وصف المنتج
                            </Card.Text>
                            <div className="card-bottom d-flex">
                                <Button className="btn-card flex-fill" variant="primary">اضف إلى السلة</Button>
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