import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import usePostRequest from '../hooks/usePostRequest';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Button from './styled/Button';
import upload from '../assets/upload.svg';
import Loader from './Loader';
import Alert from './Alert';

type FileData = {
  fileBase64: string;
  name: string;
};

const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'bmp'];

function isValidExtension(fileName: string): boolean {
  const splittedFileName = fileName.split('.');
  const chunksNumber = splittedFileName.length;

  if (allowedExtensions.includes(splittedFileName[chunksNumber - 1])) {
    return true;
  }

  return false;
}

function FileUpload() {
  const [file, setFile] = useState<File | null>();
  const [fileData, setFileData] = useState<FileData | null>();
  const [fileError, setFileError] = useState('');
  const [{ isLoading, responseData }, callApi] = usePostRequest(
    '/api/images',
    fileData
  );
  const history = useHistory();
  useDocumentTitle('OPQ PIC | Image Uploader');

  const headerText = isLoading
    ? `Uploading ${file!.name}...`
    : 'Upload your image';

  useEffect(() => {
    history.push(responseData?.data?.imageDetails?.handle);
  }, [history, responseData]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const file = e.currentTarget.files![0];
    setFileError('');
    setFile(file);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      const data = {
        fileBase64: event.target.result,
        name: file.name
      };

      setFileData(data);
    };

    reader.readAsDataURL(file);
  }

  function handleRemoveFile() {
    setFileData(null);
    setFile(null);
  }

  function handleUpload() {
    if (file!.size > 5242880) {
      return setFileError('Maxiumum file size is: 5MB');
    }

    if (!isValidExtension(file!.name)) {
      return setFileError(
        'Allowed extensions are: .jpg, .jpeg, .png, .gif, .svg, .bmp'
      );
    }

    callApi();
  }

  function handleConfirm() {
    handleRemoveFile();
  }

  return (
    <Wrapper>
      {!!fileError && (
        <Alert
          show={!!fileError}
          title="Error"
          text={fileError}
          onConfirm={handleConfirm}
        />
      )}
      <Header>{headerText}</Header>
      {isLoading && <Loader />}
      {file && !isLoading && (
        <Name onClick={handleRemoveFile}>{file.name}</Name>
      )}
      {!file && (
        <>
          <Info>
            Allowed extensions: <span>jpg, jpeg, png, gif</span>
          </Info>
          <Info last>
            Maximum file size: <span>5MB</span>
          </Info>
        </>
      )}
      {!file && (
        <Label>
          <span>Click here to select file</span>
          <i />
          <Input
            onChange={handleChange}
            type="file"
            accept=".jpg, .jpeg, .png, .gif, .svg, .bmp"
          />
        </Label>
      )}
      {file && !isLoading && (
        <ButtonWrapper>
          <Button onClick={handleUpload}>Upload</Button>
        </ButtonWrapper>
      )}
    </Wrapper>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: ${fadeIn} 1s linear;
`;

const Header = styled.h1`
  color: #333;
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border: 3px dashed #4257f5;
  margin-bottom: 40px;
  cursor: pointer;

  span {
    color: #4257f5;
    position: relative;
    top: 20px;
    font-size: 18px;
    font-weight: 700;

    &::after {
      content: '';
      background: url(${upload}) no-repeat center center;
      background-size: 100%;
      width: 60px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: -60px;
      transform: translateX(-50%);
    }
  }
`;

const Name = styled.h2`
  font-size: 32px;
  color: #333;
  text-align: center;

  &:hover {
    text-decoration: line-through;
  }
`;

const Info = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: ${({ last }: { last?: boolean }) => (last ? '16px' : '8px')};
  font-style: italic;
  text-align: right;

  span {
    font-weight: 700;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Input = styled.input`
  display: none;
`;

export default FileUpload;
