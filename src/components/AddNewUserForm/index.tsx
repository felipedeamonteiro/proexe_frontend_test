import React from 'react';
import { Container } from './AddNewUserForm';
import { useRouter } from 'next/router';
import { Form, Card, Button } from 'react-bootstrap';
import { useForm , Controller, SubmitHandler } from 'react-hook-form';
import { addUserAction } from '../../store/modules/userData/actions';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInput {
  name: string;
  email: string;
  username: string;
  city: string;
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  username: yup.string().required(),
  city: yup.string().required(),
})

const AddNewUserForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const handleSubmitButton: SubmitHandler<IFormInput> = (data) => {
    dispatch(addUserAction(data));
    router.push('/dashboard');
  }

  const handleCancel = () => {
    router.push('/dashboard');
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
          <Form onSubmit={handleSubmit(handleSubmitButton)}>
            <Controller
              name="name"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Form.Group className="input-container" controlId="formBasicName">
                  <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>Name</Form.Label>
                  <div className="input-div">
                    <Form.Control {...field} type="text" placeholder="Enter name" />
                    {errors.name ? <span>Name required</span> : <span style={{ visibility: 'hidden' }}>Name required</span>}
                  </div>
                </Form.Group>
              )}
            />

            <Controller
              name="email"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Form.Group className="input-container" controlId="formBasicEmail">
                  <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>Email</Form.Label>
                  <div className="input-div">
                    <Form.Control {...field} type="text" placeholder="Enter email" />
                    {errors.email ? <span>Email required</span> : <span style={{ visibility: 'hidden' }}>Email required</span>}
                  </div>
                </Form.Group>
              )}
            />

            <Controller
              name="username"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Form.Group className="input-container" controlId="formBasicUsername">
                  <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>Username</Form.Label>
                  <div className="input-div">
                    <Form.Control {...field} type="text" placeholder="Enter username" />
                    {errors.username ? <span>Username required</span>  : <span style={{ visibility: 'hidden' }}>Username required</span>}
                  </div>
                </Form.Group>
              )}
            />

            <Controller
              name="city"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Form.Group className="input-container" controlId="formBasicCity">
                  <Form.Label style={{ fontWeight: 'bold', marginBottom: '20px' }}>City</Form.Label>
                  <div className="input-div">
                    <Form.Control {...field} type="text" placeholder="Enter city" />
                    {errors.city ? <span>City required</span> : <span style={{ visibility: 'hidden' }}>City required</span>}
                  </div>
                </Form.Group>
              )}
            />

            <div className="buttons-div">
              <Button variant="success" type="submit">Submit</Button>
              <Button onClick={handleCancel} variant="outline-danger" type="button">Cancel</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AddNewUserForm;
