import styled from 'styled-components';

const Button = styled.button`
  padding: 15px 20px;
  min-width: 220px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: #4287f5;
  color: #fff;
  border: 2px solid transparent;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #4257f5;
  }
`;

export default Button;
