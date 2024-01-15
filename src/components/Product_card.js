import { Card, Row, Col, Container } from 'react-bootstrap';
import Heart from '../images/Heart.png';
import QuantitySelector from './QuantitySelector';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const ProductCard = ({ imageUrl, name, description, price, onPurchase }) => {

  const [show, setShow] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [stateMessage, setStateMessage] = useState('');
  const [nameForm, setNameForm] = useState('');
  const [emailForm, setEmailForm] = useState('');
  const [messageForm, setMessageForm] = useState('');
  let count = localStorage.getItem('emailLimit') || 0;

  const sendEmail = (e) => {
    e.preventDefault();
    const templateFormData = {
      from_name: nameForm,
      email_id: emailForm,
      message: messageForm
    }

    if (nameForm === '' || emailForm === '' || messageForm === '') {
      setStateMessage('من فضلك املئ الحقول');
      setShowAlert(true);
    } else {
      let emailRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,6}$/;
      if (emailRegex.test(emailForm)) {
        if (Number(count) < 2) {
          // If less than 2, increase the count and save it
          localStorage.setItem('emailLimit', Number(count) + 1);
          emailjs.send('service_br7pc65', 'template_d675cby', templateFormData, '0Vrk_eCV-opU4mZPo')
            .then((result) => {
              setStateMessage("تم إرسال البريد بنجاح")
              setShowAlert(true);
              console.log(result.status);
              setNameForm('');
              setEmailForm('');
              setMessageForm('');
              handleClose();
            }).catch((error) => {
              setStateMessage('حدث خطأ ما لم يتم إرسال البريد');
              setShowAlert(true);
              console.log(error);
            });
        } else {
          // If 2 or more, return false
          setStateMessage('المعذرة لا تستطيع إرسال المزيد من الرسائل ، فقط انتظر إلى يتم الرد عليك');
          setShowAlert(true);
        }

      } else {
        setStateMessage('ادخل بريد إلكتروني صالح');
        setShowAlert(true);
      }
    }
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card style={{ border: 'none', padding: '20px', marginTop: '-40px' }}>
        <Row>
          <Col xs={12} md={6}>
            <Card.Img
              src={imageUrl}
              style={{
                borderRadius: '25px',
                width: '100%',
                height: 'auto',
                maxWidth: '618px',
                maxHeight: '618px',
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <Card.Body className='product_body-text'>
              <Container>
                <div className="Product_label d-md-flex justify-content-between" style={{ marginBottom: '10px' }}>
                  <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{name}</Card.Title>
                  <img src={Heart} alt="Heart" style={{ width: '20px', height: '17px', marginTop: '6px' }} />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <Col xs={9}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <svg key={index} xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none" style={{ marginRight: '2px' }}>
                        <path d="M7.38801 1.7444C8.04987 0.412301 9.95013 0.412301 10.612 1.7444L11.8274 4.19062C12.0895 4.71813 12.5931 5.08403 13.1758 5.17029L15.8779 5.57029C17.3493 5.78812 17.9365 7.59538 16.8741 8.63648L14.9232 10.5483C14.5025 10.9606 14.3102 11.5526 14.4082 12.1335L14.8628 14.8269C15.1103 16.2936 13.5729 17.4106 12.2545 16.7219L9.83336 15.4573C9.31125 15.1846 8.68875 15.1846 8.16664 15.4573L5.7455 16.7219C4.42706 17.4106 2.88971 16.2936 3.13724 14.8269L3.59181 12.1335C3.68983 11.5526 3.49747 10.9606 3.07676 10.5483L1.12585 8.63648C0.063477 7.59538 0.650692 5.78812 2.12212 5.57029L4.82419 5.17029C5.40688 5.08403 5.9105 4.71813 6.1726 4.19062L7.38801 1.7444Z" fill="#3F5B4D" />
                      </svg>
                    ))}
                  </Col>
                </div>
              </Container>

              <Container >
                <div style={{ marginBottom: '50px' }}>
                  <Card.Text style={{ fontSize: '1rem' }}>
                    {description}
                  </Card.Text>
                </div>

                <div className="price d-md-flex justify-content-between">
                  <Card.Text className="price_lbl" style={{ color: '#3F5B4D', fontFamily: 'Tajawal', fontSize: '20px', fontStyle: 'normal', lineHeight: '16px', letterSpacing: '-0.28px', textAlign: 'right' }}>
                    السعر  شامل الضريبه
                  </Card.Text>

                  <Card.Text className="price_num" style={{ color: '#3F5B4D', fontFamily: 'Tajawal', fontSize: '20px', fontStyle: 'normal', fontWeight: '900', lineHeight: '16px', letterSpacing: '-0.28px' }}>
                    {price} ريال
                  </Card.Text>
                </div>
              </Container>

              <Container>
                <div className="card-bottom d-flex">
                  <button className="btn-card flex-fill" onClick={handleShow} variant="primary" >
                    أنا مهتم بهذا المنتج
                  </button>

                  <QuantitySelector />

                </div>
              </Container>


            </Card.Body>
          </Col>
        </Row>
      </Card>
      {/* START Forms Module */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>أملئ الاستبيان</Modal.Title>
        </Modal.Header>
        {/* Start Alert Box Message */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="position-relative"
          style={{ minHeight: '100px' }}
        >
          <ToastContainer position="middle-center" className="position-absolute" style={{ zIndex: 9999 }}>
            <Toast className='bg-primary-subtle' onClose={() => setShowAlert(false)} delay={4000} autohide show={showAlert}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">اشعار</strong>
                <small className="text-muted">الأن</small>
              </Toast.Header>
              <Toast.Body  >{stateMessage}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        {/* End Alert Box Message */}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor='names'>الاسم</Form.Label>
              <Form.Control id='names' onChange={(e) => { setNameForm(e.target.value) }}
                type="text"
                autoFocus
                required={true}
              />
              <Form.Label htmlFor='email'>البريد الإلكتروني</Form.Label>
              <Form.Control id='email' onChange={(e) => { setEmailForm(e.target.value) }}
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label htmlFor='message'>لماذا انت مهتم بهذا المنتج؟ حدثنا عن حاجتك لتوفير المنتج بأفضل حلة تليق بك</Form.Label>
              <Form.Control as="textarea" id='message' onChange={(e) => { setMessageForm(e.target.value) }} required={true} rows={3} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer className='m-auto'>
          <Button variant="danger" onClick={handleClose}>
            اغلاق
          </Button>
          <Button variant="primary" onClick={sendEmail} >
            إرسال
          </Button>
        </Modal.Footer>
      </Modal>
      {/* End Forms Module */}
    </>
  );
};
export default ProductCard;
