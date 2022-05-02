import { AuthorContainer, Container } from "./HomePage.styles";
import React from "react";
import { MdArrowRightAlt } from "react-icons/md";
import Quote from "../../components/Quote/Quote";
import { DataProps } from "../../types";
import { useNavigate } from "react-router-dom";

const HomePage: React.FunctionComponent<DataProps> = ({ data }) => {
  let navigate = useNavigate();
  return (
    <Container>
      <Quote data={data} />
      <AuthorContainer onClick={() => navigate("/author")}>
        <div>
          <h3>{data?.author}</h3>
          <p>{data?.tags[0]}</p>
        </div>
        <MdArrowRightAlt size={36} className="icon" />
      </AuthorContainer>
    </Container>
  );
};

export default HomePage;
