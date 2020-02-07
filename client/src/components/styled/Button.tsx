import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 12px;
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
