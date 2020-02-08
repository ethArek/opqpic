import React, { useState, useEffect } from 'react';
import { MasterHandle } from 'opaque';

import FileUpload from './components/FileUpload';
import GlobalStyles from './components/GlobalStyles';
import {
  UPLOAD_OPTIONS,
  DOWNLOAD_OPTIONS,
  HANDLE as handle
} from './config/opq';

const Test = () => {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const opqHandler = new MasterHandle(
      { handle },
      { uploadOpts: UPLOAD_OPTIONS, downloadOpts: DOWNLOAD_OPTIONS }
    );
    const downloadHandler = opqHandler.downloadFile(
      'a28ed0e967b5f73a0ea2033976f936bd2543b6954bb9674b921b79eeb01eff805cbb62d29d1306accded394fc3553b3ea0455d641fb5c818e1565ff8daa37fb3'
    );
    downloadHandler.toFile().then((file: any) => {
      const reader = new FileReader();

      reader.addEventListener('load', function() {
        const result = this.result as string;
        setImage(result);
      });

      reader.readAsDataURL(file);
    });
  }, []);

  return <img src={image} />;
};

const App = () => {
  return (
    <>
      <GlobalStyles />
      <FileUpload />
    </>
    // <Test />
  );
};

export default App;
