import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Cart, Confirmation, Home } from "screens";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import GlobalStyle from "styles/global";
import theme from "styles/theme";
import store from "store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
