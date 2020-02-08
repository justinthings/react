import React from "react";
import { render } from "react-dom";
import styled from "styled-components";
const StylesContext = React.createContext();
const StylesProvider = StylesContext.Provider;
const StylesConsumer = StylesContext.Consumer;
const stylesDefault = { color: "red" };
const stylesFromUser = { color: "blue" };

const HeaderWrapper = styled.div`
  color: ${(styles) => styles.color};
`;

const Header = props => (
  <StylesConsumer>
    {styles => (
      // this is where things that are shared, are available to child components of Layout:
      <HeaderWrapper {...styles}>{props.children}</HeaderWrapper>
    )}
  </StylesConsumer>
);

const Layout = props => (
  <StylesProvider value={{ ...stylesDefault, ...props.styles, ...props }}>
    {props.children}
  </StylesProvider>
);

render(
  <Layout styles={stylesFromUser}>
    <Header>A Header</Header>
  </Layout>
  document.getElementById("root")
);
