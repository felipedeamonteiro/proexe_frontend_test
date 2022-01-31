import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { removeUserAction } from '../../../store/modules/userData/actions';

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
  idToDelete: number;
}

const DashboardModal: React.FC<ModalProps> = ({ setShowModal, showModal, idToDelete }) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    setShowModal(false);
  }

  const handleDelete = () => {
    dispatch(removeUserAction(idToDelete))
    alert('User Deleted');
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal} centered>
        <Modal.Header>
          <h2>Delete</h2>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <div className="buttons-div">
            <Button onClick={handleCancel} variant="secondary" type="submit">Cancel</Button>
            <Button onClick={handleDelete} style={{ marginLeft: '15px' }} variant="danger" type="submit">Delete</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DashboardModal;
