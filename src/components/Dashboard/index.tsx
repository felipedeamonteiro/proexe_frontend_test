import React, { useEffect, useState } from 'react';
import { Container } from './Dashboard';
import { useRouter } from 'next/router';
import { Table, Card, Button, Spinner } from 'react-bootstrap';
import DashboardModal from './DashboardModal';
import { useSelector, useDispatch } from 'react-redux';
import { IUser } from '../../store/modules/userData/types';
import { addUsersToState } from '../../store/modules/userData/actions';
import useUserDataService from '../../hooks/useUserDataService';

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const router = useRouter();
  const usersData = useSelector((state: any) => state.userData.users);
  const dispatch = useDispatch();
  const { getUsersData } = useUserDataService();

  console.log('usersData', usersData);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await getUsersData();
      if (response) {
        dispatch(addUsersToState(response));
        setLoading(false);
      } else {
        setLoading(false);
        console.error('Something is wrong with the api request');
      }
    }
    if (usersData.length === 0) {
      getData();
    }
  }, []);

  const handleAddNew = () => {
    router.push('/add-new-user');
  };

  const handleEdit = (id: number) => {
    router.push(`/edit-user?id=${id}`);
  }

  const handleDelete = (id: number) => {
    setIdToDelete(id)
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
              {!loading ? usersData.map((user: IUser, index: number) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td><Button onClick={() => handleEdit(user.id)} variant="warning">Edit</Button></td>
                  <td><Button onClick={() => handleDelete(user.id)} variant="danger">Delete</Button></td>
                </tr>
              )) : (
                <div className="spinner-div">
                  <Spinner animation="border" variant="info" />
                  <span>Loading...</span>
                </div>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <DashboardModal setShowModal={setShowModal} showModal={showModal} idToDelete={idToDelete} />
    </Container>
  )
}

export default Dashboard;
