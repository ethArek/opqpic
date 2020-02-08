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
      '837397c61b6602b94d1df8524fe685fc8b300cba4b1f6a310c9dd2d5e982d042650d9d74f37e8d277c8251abbae27dff9896aed7736a1c28e671e42d7652793c'
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
    // <>
    //   <GlobalStyles />
    //   <FileUpload />
    // </>
    <Test />
  );
};

export default App;
