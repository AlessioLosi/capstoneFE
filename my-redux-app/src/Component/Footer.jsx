import { Container, Row, Col, Button } from 'react-bootstrap';

const Footercustom = function () {
  return (
    <footer className="text-white">
      <Container className="mt-5">
        <Row className="justify-content-around">
          <Col md={6} className='text-center mt-5'>
            <ul className="list-unstyled">
              <li><a href="javascript:void(0)" className="text-decoration-none text-white">Help Center</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-white">Jobs</a></li>
              <li><a href="javascript:void(0)" className="text-decoration-none text-white">Cookie Preferences</a></li>
            </ul>
          </Col>
          <Col md={6} className='text-center mt-5'>
            <ul className="list-unstyled">
              <li><a href="mailto:contact@weather.com" className="text-decoration-none text-white">Email: contact@eventsnow.com</a></li>
              <li><a href="tel:+1234567890" className="text-decoration-none text-white">Phone: +1 234 567 890</a></li>
              <li><a href="https://www.eventsnow.com/contact-us" className="text-decoration-none text-white">Contact Us</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="flex-column justify-content-center align-items-center mt-4">
          <Col xs={12} className="text-center mb-2">
            <Button variant="outline-light">Service Code</Button>
          </Col>
          <Col xs={12} className="text-center">
            <p>&copy; EventsNow, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footercustom;
