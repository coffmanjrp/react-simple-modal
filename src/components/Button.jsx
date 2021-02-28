import styled from 'styled-components';

const Btn = styled.button`
  padding: 1rem 2rem;
  min-width: 100px;
  background-color: #141414;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <>
      <Btn onClick={onClick}>{children}</Btn>
    </>
  );
};

export default Button;
