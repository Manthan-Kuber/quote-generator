import { Container } from "./Home.styles";
import React from "react";
import { dataItem } from "../../types";

interface BoxProps {
  data: dataItem | undefined;
}

const Home: React.FunctionComponent<BoxProps> = () => {
  return <Container>Home</Container>;
};

export default Home;
