import styled from 'styled-components';

const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <h1>Modal</h1> : null}</>;
};

export default Modal;
