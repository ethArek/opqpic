import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import opqLogo from '../assets/opq-logo.svg';

function Navbar() {
  return (
    <Wrapper>
      <Logo to="/">OPQ PIC</Logo>
      <Opacity>
        Powered by <img width="40" height="40" src={opqLogo} alt="Opacity" />
      </Opacity>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #4257f5;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
`;

const Opacity = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`;

export default Navbar;
