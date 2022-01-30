import React from 'react';
//import { Container } from './DashboardModal';
import { Modal, Button } from 'react-bootstrap';

interface ModalProps {
  setShowModal: (showModal: boolean) => void;
  showModal: boolean;
}

const DashboardModal: React.FC<ModalProps> = ({ setShowModal, showModal }) => {

  const handleCancel = () => {
    setShowModal(false);
  }

  const handleDelete = () => {
    alert('User Deleted');
    setShowModal(false);
  };

  return (
    <>
      <Modal show={showModal}>
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
