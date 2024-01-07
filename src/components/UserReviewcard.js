import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const UserReviewCard = ({ userProfilePicture, reviewText, userName, starRating }) => {
  return (

    <Card style={{ maxWidth: '400px', margin: '10px', border: 'none' }}>

      <Card.Body>
      <svg
       className='left_point'
       xmlns="http://www.w3.org/2000/svg"
       width="22"
       height="37"
       viewBox="0 0 22 37"
       fill="none"
       style={{
       position: 'absolute',
       top: 0,
       left: '-22px', // Adjust the distance from the left side
      }}
     >
      <path d="M5.42464 17.4574C7.32719 16.2049 9.58543 15.605 11.8587 15.7483C14.132 15.8916 16.2971 16.7702 18.0273 18.2517C19.7575 19.7332 20.9591 21.7371 21.4507 23.9612C21.9424 26.1853 21.6974 28.509 20.7529 30.5817C19.8083 32.6545 18.2153 34.3638 16.2142 35.452C14.2131 36.5401 11.9124 36.948 9.65921 36.6141C7.406 36.2803 5.32247 35.2227 3.72289 33.6011C2.12331 31.9794 1.09446 29.8816 0.791512 27.624C-0.166613 22.92 -0.539364 17.2631 1.33489 12.1417C3.34564 6.6555 7.80289 2.15625 15.7855 0.0667496C16.4507 -0.0861015 17.1493 0.0261536 17.7331 0.379715C18.317 0.733276 18.7401 1.30034 18.9129 1.96066C19.0856 2.62097 18.9944 3.32261 18.6586 3.9168C18.3227 4.51098 17.7686 4.95098 17.1138 5.1435C10.6563 6.834 7.63751 10.2097 6.26464 13.9477C5.85776 15.0634 5.58214 16.242 5.42464 17.46" fill="#3F5B4D" />
     </svg>
    <br/>

        
      <Card.Text>{reviewText}</Card.Text>
        <Row>
          <Col xs={9}>
            <div style={{ marginBottom: '10px' }}>


            <br/>
            <svg className='right_point'
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="38"
              viewBox="0 0 22 38"
              fill="none"
            >
             <path d="M16.5754 19.6942C14.6728 20.9467 12.4146 21.5466 10.1413 21.4033C7.86797 21.26 5.70291 20.3814 3.97269 18.8999C2.24246 17.4184 1.0409 15.4145 0.54926 13.1904C0.057621 10.9663 0.302566 8.64259 1.24715 6.56986C2.19173 4.49714 3.78471 2.78779 5.78581 1.69965C7.7869 0.611519 10.0876 0.203621 12.3408 0.537488C14.594 0.871355 16.6775 1.92888 18.2771 3.55054C19.8767 5.1722 20.9055 7.27004 21.2085 9.52761C22.1666 14.2316 22.5394 19.8885 20.6651 25.0099C18.6544 30.4961 14.1971 34.9954 6.21449 37.0849C5.54928 37.2377 4.85069 37.1255 4.26686 36.7719C3.68303 36.4183 3.25987 35.8513 3.08711 35.191C2.91435 34.5306 3.00558 33.829 3.34144 33.2348C3.67731 32.6406 4.23141 32.2006 4.88624 32.0081C11.3437 30.3176 14.3625 26.9419 15.7354 23.2039C16.1422 22.0882 16.4179 20.9096 16.5754 19.6916" fill="#3F5B4D"/>
            </svg>
              <h5 style={{paddingTop:'30px'}}>{userName}</h5>
              {Array.from({ length: starRating }).map((_, index) => (
                <span key={index} role="img" aria-label="star" style={{ marginRight: '2px', color: 'purple'}}>
                  ⭐
                </span>
              ))}
            </div>
            
          </Col>
          <Col xs={3} style={{paddingTop:'70px', paddingLeft:'5px'}}>

            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                margin: '0 auto 15px ',
                
              }}
            >
              <img
                src={userProfilePicture}
                alt="User Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }
              }
              />
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserReviewCard;
