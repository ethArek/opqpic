import styled from 'styled-components';

import { Colors } from '../../contants/colors'

const Button = styled.button`
  padding: 15px 20px;
  min-width: 220px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${Colors.PRIMARY};
  color: #fff;
  border: 2px solid transparent;
  font-family: inherit;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${Colors.PRIMARY_DARK};
  }
`;

export default Button;
