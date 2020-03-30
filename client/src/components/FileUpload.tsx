import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import usePostRequest from '../hooks/usePostRequest';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Button from './styled/Button';
import upload from '../assets/upload.svg';
import Loader from './Loader';
import Alert from './Alert';
import { Colors } from '../contants/colors';

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
    if (responseData) {
      history.push('/share/' + responseData?.data?.imageDetails?.handle);
    }
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
      <AnimationWrapper>
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
      </AnimationWrapper>
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
  min-height: calc(100vh - 159px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  background-color: ${({ theme }) =>
    theme.theme === 'light' ? Colors.WHITE : Colors.BLACK};

  @media screen and (min-width: 992px) {
    min-height: calc(100vh - 83px);
  }
`;

const AnimationWrapper = styled.div`
  animation: ${fadeIn} 1s linear;
`;

const Header = styled.h1`
  color: ${({ theme }) =>
    theme.theme === 'light' ? Colors.DARK_GRAY : Colors.WHITE};
  font-size: 42px;
  margin-bottom: 20px;
  text-align: center;
  word-break: break-all;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  max-width: 90vw;
  max-height: 90vh;
  border: 3px dashed ${Colors.PRIMARY};
  margin-bottom: 40px;
  cursor: pointer;

  span {
    color: ${Colors.PRIMARY};
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
  color: ${({ theme }) =>
    theme.theme === 'light' ? Colors.DARK_GRAY : Colors.WHITE};
  text-align: center;
  word-break: break-all;

  &:hover {
    text-decoration: line-through;
  }
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) =>
    theme.theme === 'light' ? Colors.DARK_GRAY : Colors.WHITE};
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
