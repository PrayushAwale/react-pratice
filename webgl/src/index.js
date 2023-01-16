import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { Global, MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./JohnSmilga/Submenu/Context";

// function MyGlobalStyles() {
//   return (
//     <Global
//       styles={(theme) => ({
//         "*, *::before, *::after": {
//           margin: 0,
//           padding: 0,
//           boxSizing: "border-box",
//           fontFamily: "sans-serif",
//         },
//         a: {
//           textDecoration: "none",
//           color: "black",
//         },
//         li: {
//           listStyle: "none",
//         },
//       })}
//     />
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
    {/* <MantineProvider> */}
    {/* <MyGlobalStyles /> */}
    {/* </MantineProvider> */}
  </BrowserRouter>
);
