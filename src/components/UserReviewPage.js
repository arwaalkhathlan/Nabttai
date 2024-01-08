import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserReviewCard from '../components/UserReviewcard';
import userReviewData from '../data/userReviewData';

const UserReviewPage = () => {
  return (
    <Container >
      <Row className="justify-content-around">
        {userReviewData.map((review) => (
          <Col key={review.id} xs={12} sm={12} md={6} lg={4}>
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
