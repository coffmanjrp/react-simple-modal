import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import { Button, Modal } from './components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={openModal}>This is a modal</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
