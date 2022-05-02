import { AuthorContainer, Container, QuoteContainer } from "./Home.styles";
import React from "react";
import { dataItem } from "../../types";
import { MdArrowRightAlt } from "react-icons/md";

interface BoxProps {
  data: dataItem | undefined;
}

const Home: React.FunctionComponent<BoxProps> = ({ data }) => {
  return (
    <Container>
      <QuoteContainer>
        <p>“{data?.content}”</p>
      </QuoteContainer>
      <AuthorContainer>
        <div>
          <h3>{data?.author}</h3>
          <p>{data?.tags[0]}</p>
        </div>
        <MdArrowRightAlt size={36} className="icon" />
      </AuthorContainer>
    </Container>
  );
};

export default Home;
