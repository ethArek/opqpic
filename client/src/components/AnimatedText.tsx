import React, { useState } from 'react';
import Typist from 'react-typist';
import styled from 'styled-components';

function AnimatedText() {
  const [activePart, setActivePart] = useState(1);
  return (
    <Wrapper>
      {activePart === 1 && (
        <Typist cursor={{ show: false }} onTypingDone={() => setActivePart(2)}>
          <p>Uploading file to server</p>
          <Typist.Delay ms={300} />
          <p>Encofing file</p>
        </Typist>
      )}
      {activePart === 2 && (
        <Typist avgTypingDelay={20}>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
          <p>41271274172412</p>
        </Typist>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #000;
  color: #fff;
  font-family: 'Inconsolata', monospace;

  p {
    margin: 0;
  }
`;

export default AnimatedText;
