import { useState, useEffect } from 'react';

// TODO: expand this hook to take on different params so we can handle non-GET requests
function useApi(route) {

  // Prefix route with production host
  if (process.env.NODE_ENV === "production") {

  }
  const url = (process.env.NODE_ENV === "production") ? "https://sensehealth-backend.herokuapp.com" + route : route;
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function getData() {
      const request = await fetch(url);
      const data = await request.json();

      setResult(data);
    }

    getData();
  }, [url]);

  return result;
}

export default useApi;