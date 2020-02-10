import React, { useState, useEffect } from 'react';
import { MasterHandle } from 'opaque';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS, HANDLE } from '../config/opq';
import useDocumentTitle from '../hooks/useDocumentTitle';
import CopyUrl from './CopyUrl';
import Loader from './Loader';
import { Colors } from '../contants/colors';

interface IProps {
  match: {
    params: {
      handle: string;
    };
  };
}

function ImagePage({
  match: {
    params: { handle }
  }
}: IProps) {
  const [image, setImage] = useState<string>('');
  const [fileName, setFileName] = useState('');
  useDocumentTitle(`OPQ PIC | ${fileName}`);
  const history = useHistory();

  useEffect(() => {
    const opqHandler = new MasterHandle(
      { handle: HANDLE },
      { uploadOpts: UPLOAD_OPTIONS, downloadOpts: DOWNLOAD_OPTIONS }
    );
    const downloadHandler = opqHandler.downloadFile(handle);
    downloadHandler
      .toFile()
      .then((file: any) => {
        const reader = new FileReader();
        setFileName(file.name);

        reader.addEventListener('load', function() {
          const result = this.result as string;
          setImage(result);
        });

        reader.readAsDataURL(file);
      })
      .catch(() => {
        history.push('/');
      });
  }, [handle, history]);

  return (
    <Wrapper>
      <CopyUrl />
      {image ? <Image src={image} alt={fileName} /> : <Loader />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ theme }) =>
    theme.theme === 'light' ? Colors.WHITE : Colors.BLACK};
  min-height: calc(100vh - 83px);
  text-align: center;
`;

const Image = styled.img`
  max-width: 100vw;
  max-height: calc(100vh - 200px);
  display: inline-block;
  padding: 20px 0;
`;

export default ImagePage;
