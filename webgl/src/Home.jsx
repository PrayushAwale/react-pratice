import { useState, useEffect } from "react";
const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Use Effect");
    window.addEventListener("resize", () => {
      console.log("Resized");
      setWidth(window.innerWidth);
    });
    return () => {
      console.log("Cleaned Up");
    };
  }, []);

  return (
    <>
      <h1>Max Width</h1>
      <h2>{width}</h2>
    </>
  );
};

export default Home;
