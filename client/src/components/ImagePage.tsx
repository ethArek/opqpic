import React, { useState, useEffect } from 'react';
import { MasterHandle } from 'opaque';
import styled from 'styled-components';

import { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS } from '../config/opq';
import useDocumentTitle from '../hooks/useDocumentTitle';
import CopyUrl from './CopyUrl';
import Loader from './Loader';

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
  useDocumentTitle(fileName);

  useEffect(() => {
    const opqHandler = new MasterHandle(
      { handle },
      { uploadOpts: UPLOAD_OPTIONS, downloadOpts: DOWNLOAD_OPTIONS }
    );
    const downloadHandler = opqHandler.downloadFile(handle);
    downloadHandler.toFile().then((file: any) => {
      const reader = new FileReader();
      setFileName(file.name);

      reader.addEventListener('load', function() {
        const result = this.result as string;
        setImage(result);
      });

      reader.readAsDataURL(file);
    });
  }, [handle]);

  return (
    <>
      <CopyUrl />
      {image ? <Image src={image} alt={fileName} /> : <Loader />}
    </>
  );
}

const Image = styled.img`
  max-width: 100vw;
  max-height: calc(100vh - 200px);
  display: block;
  margin: 20px auto 100px auto;
`;

export default ImagePage;
