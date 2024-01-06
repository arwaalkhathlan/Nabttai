import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Hello, world!</h1>

        <p>
          This is a paragraph.
        </p>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
