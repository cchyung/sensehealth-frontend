import { useState, useEffect } from 'react';

/*
  Hook used to fetch API data

  Params:
    route (string) - which API route we should connect to
    method (string) - one of the HTTP methods (GET, POST, PUT). If none provided, defaults to GET
    body (object) - used for requests that support passing a body

  Returns:
    [
      result (object) - data returned by the API,
      loading (boolean) - used for loading indicator
      error (string) - not null if an error occurred 
    ]
*/
function useApi(route, method, body) {
  // Prefix route with production host
  const url = (process.env.NODE_ENV === "production") ? "https://sensehealth-backend.herokuapp.com" + route : route;
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const request = await fetch(url, {
          method: method || 'GET', // Default to GET if no method
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });

        setLoading(false);

        console.log(request.status);

        if (request.status >= 400 && request.status <= 600) {
          setError(request.status);
        } else {
          const data  = await request.json();
          setResult(data);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    getData();
  }, [url, body, method]);

  return [result, loading, error];
}

export default useApi;