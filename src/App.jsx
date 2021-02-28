import styled from 'styled-components';
import { Button } from './components';
import './App.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <Container>
        <Button>This is a modal</Button>
      </Container>
    </>
  );
};

export default App;
