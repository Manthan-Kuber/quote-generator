import { authorQuotesData, DataProps } from "../../types";
import { QuoteWrapper, Title } from "./AuthorPage.styles.";
import { BaseUrl } from "../../App";
import { useState, useEffect } from "react";
import Quote from "../../components/Quote/Quote";

const AuthorPage: React.FunctionComponent<DataProps> = ({ data }) => {
  const [authorQuotes, setAuthorQuotes] = useState<authorQuotesData>();
  const authorName = data?.authorSlug;
  const fetchAuthorQuotes = async (): Promise<void> => {
    const response = await fetch(
      `${BaseUrl}/search/quotes?query=${authorName}&fields=author`
    );
    const respdata = await response.json();
    setAuthorQuotes(respdata);
    console.log(respdata);
    console.log(authorQuotes);
  };

  useEffect(() => {
    fetchAuthorQuotes();
  }, [data]);

  return (
    <>
      <Title>{data?.author}</Title>
      <QuoteWrapper>
        {authorQuotes?.results.map((quote) => (
          <Quote data={quote} />
        ))}
      </QuoteWrapper>
    </>
  );
};

export default AuthorPage;
