import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Search from "./pages/Search";
import Album from "./pages/Album";
import GlobalStyles from "./assets/styles/global";

import defaultTheme from "./assets/styles/themes/default";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/album/:id" component={Album} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
