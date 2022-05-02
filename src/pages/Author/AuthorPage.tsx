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
    <div>
      <Title>{data?.author}</Title>
      <QuoteWrapper>
        {authorQuotes?.results.map((quote,index) => (
          <Quote key={quote._id} data={quote} index={index} />
        ))}
      </QuoteWrapper>
    </div>
  );
};

export default AuthorPage;
