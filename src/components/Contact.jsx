import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Bmw5 from './img/bmw5.jpg'
import Card from 'react-bootstrap/Card';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className="hmain">
      <div className='con animate-fade-in'>
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
                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" />
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

      <div className="contact-info animate-slide-up">
        <h2>Get In Touch</h2>
        <div className="contact-cards">
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Visit Us</Card.Title>
              <Card.Text>
                123 Luxury Lane<br />
                Beverly Hills, CA 90210<br />
                United States
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Call Us</Card.Title>
              <Card.Text>
                Phone: (555) 123-4567<br />
                Fax: (555) 123-4568
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title>Email Us</Card.Title>
              <Card.Text>
                info@zoro.com<br />
                sales@zoro.com<br />
                support@zoro.com
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="business-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 10:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

