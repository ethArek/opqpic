import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './styled/Button';
import upload from '../assets/upload.svg';

function FileUpload() {
  const [file, setFile] = useState<File>();

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setFile(e.currentTarget.files![0]);
    console.log(e.currentTarget.files![0]);
  }

  return (
    <Wrapper>
      {file && <Name>{file.name}</Name>}
      {!file && (
        <Label>
          <Input onChange={handleChange} type="file" accept=".jpg, .png" />
        </Label>
      )}
      {file && (
        <ButtonWrapper>
          <Button>Upload</Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.label`
  display: block;
  border: 3px dashed #aaa;
  width: 400px;
  height: 300px;
  margin-bottom: 40px;
  cursor: pointer;
  background: url(${upload}) no-repeat center center;
  background-size: 15%;
`;

const Name = styled.h2`
  font-size: 18px;
  color: #1b1b1b;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Input = styled.input`
  display: none;
`;

export default FileUpload;
