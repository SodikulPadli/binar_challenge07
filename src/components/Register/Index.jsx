import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { GoogleLogin } from '@react-oauth/google';
import { Container } from 'react-bootstrap';

function LoginForm() {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="auto">
                        <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                            Email
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                            Password
                            </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 2 }}>
                                    <Button type="submit">Sign in</Button>
                                    <div>Or</div> 
                                    <span><GoogleLogin
                                    onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                    }}
                                    onError={() => {
                                    console.log('Login Failed');
                                    }}
                                    /></span>
                            </Col>
                        </Form.Group>
                        </Form>
                    </Col>
                </Row>  
            </Container>
    </>
  );
}

export default LoginForm;