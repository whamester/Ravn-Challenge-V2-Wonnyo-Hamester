import React from "react";
import Detail from "../components/Character/Detail";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import themeConfig from "../style/theme";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme(themeConfig);

const App = () => {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Header />
        <Sidebar>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail/:id">
            <Detail />
          </Route>
        </Sidebar>
      </ChakraProvider>
    </Router>
  );
};

export default App;
