// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import emailjs from '@emailjs/browser';
// import Toast from 'react-bootstrap/Toast';
// import ToastContainer from 'react-bootstrap/ToastContainer';
// function FormsBox() {
//     const [show, setShow] = useState(false);

//     const [showAlert, setShowAlert] = useState(false);
//     const [stateMessage, setStateMessage] = useState('');
//     const [nameForm, setNameForm] = useState('');
//     const [emailForm, setEmailForm] = useState('');
//     const [messageForm, setMessageForm] = useState('');
//     const sendEmail = (e) => {
//         e.preventDefault();
//         const templateFormData = {
//             from_name: nameForm,
//             from_email: emailForm,
//             // to_name: 'Aleiz',
//             message: messageForm
//         }
//         if (nameForm === '' && emailForm === '' && messageForm === '') {
//             setStateMessage('من فضلك املئ الحقول');
//             setShowAlert(true);
//         } else {

//             emailjs.send('service_br7pc65', 'template_hzj19fp', templateFormData, '0Vrk_eCV-opU4mZPo')
//                 .then((result) => {
//                     setStateMessage("تم إرسال البريد بنجاح")
//                     setShowAlert(true);
//                     console.log(result.status);
//                     setNameForm('');
//                     setEmailForm('');
//                     setMessageForm('');
//                     handleClose();
//                 }).catch((error) => {
//                     setStateMessage('حدث خطأ ما لم يتم إرسال البريد');
//                     setShowAlert(true);
//                     console.log(error);
//                 });
//         }
//     }
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     return (
//         <>
//             {/* START Forms Module */}
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>أملئ الاستبيان</Modal.Title>
//                 </Modal.Header>
//                 {/* Start Alert Box Message */}
//                 <div
//                     aria-live="polite"
//                     aria-atomic="true"
//                     className="position-relative"
//                     style={{ minHeight: '95px' }}
//                 >
//                     <ToastContainer position="middle-center" className="position-absolute" style={{ zIndex: 9999 }}>
//                         <Toast className='bg-primary-subtle' onClose={() => setShowAlert(false)} delay={4000} autohide show={showAlert}>
//                             <Toast.Header>
//                                 <img
//                                     src="holder.js/20x20?text=%20"
//                                     className="rounded me-2"
//                                     alt=""
//                                 />
//                                 <strong className="me-auto">اشعار</strong>
//                                 <small className="text-muted">الأن</small>
//                             </Toast.Header>
//                             <Toast.Body  >{stateMessage}</Toast.Body>
//                         </Toast>
//                     </ToastContainer>
//                 </div>
//                 {/* End Alert Box Message */}
//                 <Modal.Body>
//                     <Form>
//                         <Form.Group className="mb-3">
//                             <Form.Label htmlFor='names'>الاسم</Form.Label>
//                             <Form.Control id='names' onChange={(e) => { setNameForm(e.target.value) }}
//                                 type="text"
//                                 autoFocus
//                                 required={true}
//                             />
//                             <Form.Label htmlFor='email'>البريد الإلكتروني</Form.Label>
//                             <Form.Control id='email' onChange={(e) => { setEmailForm(e.target.value) }}
//                                 type="email"
//                                 placeholder="name@example.com"
//                                 autoFocus
//                             />
//                         </Form.Group>
//                         <Form.Group
//                             className="mb-3"
//                         >
//                             <Form.Label htmlFor='message'>لماذا انت مهتم بهذا المنتج؟ حدثنا عن حاجتك لتوفير المنتج بأفضل حلة تليق بك</Form.Label>
//                             <Form.Control as="textarea" id='message' onChange={(e) => { setMessageForm(e.target.value) }} required={true} rows={3} />
//                         </Form.Group>

//                     </Form>
//                 </Modal.Body>
//                 <Modal.Footer className='m-auto'>
//                     <Button variant="danger" onClick={handleClose}>
//                         اغلاق
//                     </Button>
//                     <input type='submit' value={`إرسال`} className='btn btn-primary' onClick={sendEmail} />
//                     {/* <in variant="primary" onClick={sendEmail} >
//             إرسال
//           </in> */}
//                 </Modal.Footer>
//             </Modal>
//         </>

//     );
//     {/* End Forms Module */ }
// }
// export default FormsBox;