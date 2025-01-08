import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import DisableZoomScroll from "./DisableZoomScroll";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <DisableZoomScroll>
        <App />
      </DisableZoomScroll>
    </ChakraProvider>
  </React.StrictMode>
);
