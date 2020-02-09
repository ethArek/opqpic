import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './styled/Button';

function CopyUrl() {
  const [buttonText, setButtonText] = useState('Copy to clipboard');

  function handleClick() {
    // @ts-ignore
    document.getElementById('url-input').select();
    document.execCommand('copy');
    setButtonText('Copied!');
  }

  return (
    <Wrapper>
      <input id="url-input" type="text" readOnly value={window.location.href} />
      <Button onClick={handleClick}>{buttonText}</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;

  input {
    width: 400px;
    border: 2px solid #4287f5;
    padding: 0 10px;
    box-shadow: unset;
    border-radius: 5px;
    margin-right: 16px;
  }
`;

export default CopyUrl;
