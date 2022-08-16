import { ThemeProvider } from "@emotion/react";
import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { LightTheme } from "styles/theme/LightTheme";
import Layout from "./layout/container";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Suspense fallback="Loading...">
        <Layout />
        <Toaster />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
