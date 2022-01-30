import React from 'react';
import { Container } from './AddNewUserForm';
import { useRouter } from 'next/router';
import { Form, Card, Button } from 'react-bootstrap';

const AddNewUserForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  }

  const handleCancel = () => {
    router.push('/');
  }

  return (
    <Container>
      <div className="container-title">
        <h1>AddNewUser Form</h1>
      </div>
      <Card style={{ width: '100%', boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.2)'}}>
        <Card.Header>
          <h3>Form</h3>
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="input-container" controlId="formBasicName">
              <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>Name</Form.Label>
              <div className="input-div">
                <Form.Control type="text" placeholder="Enter Name" />
                <span>Name required</span>
              </div>
            </Form.Group>

            <Form.Group className="input-container" controlId="formBasicEmail">
              <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>Email</Form.Label>
              <div className="input-div">
                <Form.Control type="email" placeholder="Enter email" />
                <span>Email required</span>
              </div>
            </Form.Group>

            <Form.Group className="input-container" controlId="formBasicUsername">
              <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>Username</Form.Label>
              <div className="input-div">
                <Form.Control type="text" placeholder="Enter username" />
                <span>Username required</span>
              </div>
            </Form.Group>

            <Form.Group className="input-container" controlId="formBasicCity">
              <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>City</Form.Label>
              <div className="input-div">
                <Form.Control type="text" placeholder="Enter city" />
                <span>City required</span>
              </div>
            </Form.Group>

            <div className="buttons-div">
              <Button onClick={handleSubmit} variant="success" type="submit">Submit</Button>
              <Button onClick={handleCancel} variant="outline-danger" type="submit">Cancel</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AddNewUserForm;
