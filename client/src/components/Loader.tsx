import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loader() {
  return (
    <Wrapper>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Wrapper>
  );
}

const cubeAnimation = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  }

  35% {
    transform: scale3D(0, 0, 1);
  }
`;

const Wrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 20px auto;

  div {
    width: 33%;
    height: 34%;
    background-color: #4257f5;
    float: left;
    animation: ${cubeAnimation} 1.3s infinite ease-in-out;

    &:nth-child(1) {
      animation-delay: 0.2s;
    }

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }

    &:nth-child(4) {
      animation-delay: 0.1s;
    }

    &:nth-child(5) {
      animation-delay: 0.2s;
    }

    &:nth-child(6) {
      animation-delay: 0.3s;
    }

    &:nth-child(7) {
      animation-delay: 0s;
    }

    &:nth-child(8) {
      animation-delay: 0.1s;
    }

    &:nth-child(9) {
      animation-delay: 0.2s;
    }
  }
`;

export default Loader;
