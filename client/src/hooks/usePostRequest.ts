import { useState, useCallback } from 'react';
import axios from 'axios';

function usePostRequest(url: string, data: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState('');

  const callApi = useCallback(() => {
    const sendData = async () => {
      setIsLoading(true);

      try {
        const result = await axios(url, { data, method: 'POST' });
        setResult(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    sendData();
  }, [data, url]);

  return [{ isLoading, result, error }, callApi] as any;
}

export default usePostRequest;
