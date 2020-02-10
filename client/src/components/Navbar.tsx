import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import opqLogo from '../assets/opq-logo.svg';
import { Colors } from '../contants/colors';

function Navbar() {
  return (
    <Wrapper>
      <Logo to="/">
        OPQ PIC
        <p>Image uploading and sharing platform</p>
      </Logo>
      <Opacity href="https://opacity.io" target="_blank">
        Powered by <img width="40" height="40" src={opqLogo} alt="Opacity" />
      </Opacity>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${Colors.PRIMARY};
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${Colors.WHITE};
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: ${Colors.WHITE};
  text-decoration: none;

  p {
    font-size: 14px;
    font-weight: 400;
    margin: 0;

    @media screen and (max-width: 500px) {
      display: none;
    }
  }
`;

const Opacity = styled.a`
  display: flex;
  align-items: center;
  color: ${Colors.WHITE};
  text-decoration: none;

  img {
    margin-left: 8px;
  }
`;

export default Navbar;
