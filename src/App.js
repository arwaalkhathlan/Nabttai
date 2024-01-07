import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer.js';
import UserReviewPage from './components/UserReviewPage.js';

function App() {
  return (
    <div className="App">

      <UserReviewPage />
      <Footer />
    </div>
  );
}

export default App;
