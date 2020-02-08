import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import usePostRequest from '../hooks/usePostRequest';
import Button from './styled/Button';
import upload from '../assets/upload.svg';
import AnimatedText from './AnimatedText';

type FileData = {
  fileBase64: string;
  name: string;
};

function FileUpload() {
  const [file, setFile] = useState<File>();
  const [fileData, setFileData] = useState<FileData>();
  const [{ isLoading, responseData }, callApi] = usePostRequest(
    '/api/images',
    fileData
  );
  const history = useHistory();

  // useEffect(() => {
  //   history.push(responseData?.data?.imageDetails?.handle);
  // }, [history, responseData]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];
    const reader = new FileReader();
    setFile(file);

    reader.onload = (event: any) => {
      const data = {
        fileBase64: event.target.result,
        name: file.name
      };

      setFileData(data);
    };

    reader.readAsDataURL(file);
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
          <Button onClick={() => callApi()}>Upload</Button>
        </ButtonWrapper>
      )}
      <AnimatedText />
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
