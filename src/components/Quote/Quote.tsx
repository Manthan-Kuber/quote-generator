import { motion } from "framer-motion";
import { DataProps } from "../../types";
import { QuoteContainer } from "./Quote.styles";

const Quote: React.FunctionComponent<DataProps> = ({ data, index }) => {
  const quoteAnimation = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index! * 0.2 },
    },
  };

  return (
    <QuoteContainer
      as={motion.div}
      variants={quoteAnimation}
      initial="hidden"
      animate="show"
      whileHover={{ scale: 1.1  }}
    >
      <p>“{data?.content}”</p>
    </QuoteContainer>
  );
};

export default Quote;
