import { authorQuotesData, DataProps } from "../../types";
import { LoadingIcon, QuoteWrapper, Title } from "./AuthorPage.styles.";
import { BaseUrl } from "../../App";
import { useState, useEffect } from "react";
import Quote from "../../components/Quote/Quote";
import { motion } from "framer-motion";
import { CgSpinnerTwoAlt } from "react-icons/cg";


const AuthorPage = ({ data, loading }: DataProps) => {
  const [authorQuotes, setAuthorQuotes] = useState<authorQuotesData>();
  const fetchAuthorQuotes = async (): Promise<void> => {
    const response = await fetch(
      `${BaseUrl}/search/quotes?query=${data?.authorSlug}&fields=author`
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
      {loading ? (
        <LoadingIcon size={36} />
      ) : (
        <>
          <Title
            as={motion.h1}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                when: "beforeChildren",
                duration: 0.3,
              },
            }}
          >
            {data?.author}
          </Title>
          <QuoteWrapper>
            {authorQuotes?.results.map((quote, index) => (
              <Quote key={quote._id} data={quote} index={index} />
            ))}
          </QuoteWrapper>
        </>
      )}
    </>
  );
};

export default AuthorPage;
