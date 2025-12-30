import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Bmw5 from './img/Bmw5.jpg'
 


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="hmain">
      <div className='con'>
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={6} md={4}>
            <Image src={Bmw5} width={"150px"} height={"150px"} roundedCircle />
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
  );
}

export default Contact;

