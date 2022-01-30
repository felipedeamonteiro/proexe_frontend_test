import React, { useState } from 'react';
import { Container } from './Dashboard';
import { useRouter } from 'next/router';
import { Table, Card, Button } from 'react-bootstrap';
import DashboardModal from './DashboardModal';

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const router = useRouter();

  const handleAddNew = () => {
    router.push('/add-new-user');
  };

  const handleDelete = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <div className="container-title">
        <h1>Dashboard</h1>
      </div>
      <Card style={{ width: '100%', boxShadow: '0px 4px 10px 2px rgba(0, 0, 0, 0.2)' }}>
        <Card.Header>
          <div className="card-header-div">
            <h3>User List</h3>
            <Button onClick={handleAddNew} variant="primary">Add New</Button>
          </div>
        </Card.Header>
        <Card.Body>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>City</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12</td>
                <td>John Smith</td>
                <td>johnsmith</td>
                <td>johnsmith@mail.com</td>
                <td>NYC</td>
                <td><Button  variant="warning">Edit</Button></td>
                <td><Button onClick={handleDelete} variant="danger">Delete</Button></td>
              </tr>
              <tr>
                <td>15</td>
                <td>John Doe</td>
                <td>johndoe</td>
                <td>johndoe@mail.com</td>
                <td>LA</td>
                <td><Button variant="warning">Edit</Button></td>
                <td><Button onClick={handleDelete} variant="danger">Delete</Button></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <DashboardModal setShowModal={setShowModal} showModal={showModal} />
    </Container>
  )
}

export default Dashboard;
