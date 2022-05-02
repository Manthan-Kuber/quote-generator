import { Container, QuoteContainer } from "./Home.styles";
import React from "react";
import { dataItem } from "../../types";

interface BoxProps {
  data: dataItem | undefined;
}

const Home: React.FunctionComponent<BoxProps> = ({ data }) => {
  return (
    <Container>
      <QuoteContainer>
        <p>“{data?.content}”</p>
      </QuoteContainer>
    </Container>
  );
};

export default Home;
