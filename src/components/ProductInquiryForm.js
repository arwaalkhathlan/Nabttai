import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import emailjs from '@emailjs/browser';

const ProductInquiryForm = ({ show, handleClose, showAlert, setShowAlert, onInquirySubmit }) => {
  

  const [nameForm, setNameForm] = useState('');
  const [emailForm, setEmailForm] = useState('');
  const [messageForm, setMessageForm] = useState('');
  const [stateMessage, setStateMessage] = useState('');
  let count = localStorage.getItem('emailLimit') || 0;

  const sendEmail = (e) => {
    e.preventDefault();

    const templateFormData = {
      from_name: nameForm,
      email_id: emailForm,
      message: messageForm,
    };

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
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>أملئ الاستبيان</Modal.Title>
      </Modal.Header>
      <div aria-live="polite" aria-atomic="true" className="position-relative" style={{ minHeight: '100px' }}>
        <ToastContainer position="middle-center" className="position-absolute" style={{ zIndex: 9999 }}>
          <Toast className="bg-primary-subtle" onClose={() => setShowAlert(false)} delay={4000} autohide show={showAlert}>
            <Toast.Header>
              <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
              <strong className="me-auto">اشعار</strong>
              <small className="text-muted">الأن</small>
            </Toast.Header>
            <Toast.Body>{setStateMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="names">الاسم</Form.Label>
            <Form.Control
              id="names"
              onChange={(e) => {
                setNameForm(e.target.value);
              }}
              type="text"
              autoFocus
              required={true}
            />
            <Form.Label htmlFor="email">البريد الإلكتروني</Form.Label>
            <Form.Control
              id="email"
              onChange={(e) => {
                setEmailForm(e.target.value);
              }}
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">لماذا انت مهتم بهذا المنتج؟ حدثنا عن حاجتك لتوفير المنتج بأفضل حلة تليق بك</Form.Label>
            <Form.Control as="textarea" id="message" onChange={(e) => setMessageForm(e.target.value)} required={true} rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="m-auto">
        <Button variant="danger" onClick={handleClose}>
          اغلاق
        </Button>
        <Button variant="primary" onClick={sendEmail}>
          إرسال
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductInquiryForm;
