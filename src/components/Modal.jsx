import { useCallback, useEffect, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Button } from './';
import modalImg from '../assets/img/modal.jpg';

const Background = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const ModalWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 800px;
  height: 500px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #000;
  z-index: 10;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: #000;
  border-radius: 10px 0 0 10px;
  object-fit: cover;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;
  line-height: 1.8;

  p {
    margin-bottom: 1rem;
  }
`;

const ModalButton = styled(Button)`
  padding: 10px 24px;
  font-size: 1rem;
`;

const CloseModalButton = styled(MdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
`;

const Modal = ({ showModal, setShowModal, openModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [showModal, setShowModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);

    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={modalImg} alt="Modal Image" />
              <ModalContent>
                <h1>Are you ready</h1>
                <p>Get exclusive access to our next launch.</p>
                <ModalButton>Join Now</ModalButton>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => openModal()}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
