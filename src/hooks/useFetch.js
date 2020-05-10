import React, {useState, useEffect} from 'react';

const useFetch = (url, defaultResponse) => {
  const [data, setData] = useState(defaultResponse);

  async function getDataFromAPI(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData({
        isLoading: false,
        data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getDataFromAPI(url);
  }, [url]);

  return data;
};
