import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserReviewCard from '../components/UserReviewcard';
import userReviewData from '../data/userReviewData';

const UserReviewPage = () => {
  return (
    <Container fluid>
      <Row className="justify-content-around">
        {userReviewData.map((review) => (
          <Col key={review.id} xs={12} sm={6} md={4} lg={3}>
            <UserReviewCard
              userProfilePicture={review.userProfilePicture}
              reviewText={review.reviewText}
              userName={review.userName}
              starRating={review.starRating}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserReviewPage;
