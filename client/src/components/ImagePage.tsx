import React, { useState, useEffect } from 'react';
import { MasterHandle } from 'opaque';

import { UPLOAD_OPTIONS, DOWNLOAD_OPTIONS } from '../config/opq';
import useDocumentTitle from '../hooks/useDocumentTitle';

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

  return <img src={image} alt={fileName} />;
}

export default ImagePage;
