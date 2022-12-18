import { useState } from "react";
import { useEffect } from "react";

const Create = () => {
  const url = "https://api.github.com/users/QuincyLarsons";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        setIsError(true);
        setIsLoading(false);
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setData(data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <h1>{isLoading && <div>Loading..</div>}</h1>
      <h1>{isError && <div>Error</div>}</h1>
      <h1>{data && data.followers}</h1>
    </div>
  );
};

export default Create;
