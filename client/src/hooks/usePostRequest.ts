import { useState, useCallback } from 'react';
import axios from 'axios';

type Result = {
  data: {
    imageDetails: {
      handle: string;
    };
  };
};

function usePostRequest(url: string, data: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState();
  const [error, setError] = useState('');

  const callApi = useCallback(() => {
    const sendData = async () => {
      setIsLoading(true);

      try {
        const result: Result = await axios(url, { data, method: 'POST' });
        setResponseData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    sendData();
  }, [data, url]);

  return [{ isLoading, responseData, error }, callApi] as any;
}

export default usePostRequest;
