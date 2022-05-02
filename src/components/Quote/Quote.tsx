import { DataProps } from "../../types";
import { QuoteContainer } from "./Quote.styles";

const Quote:React.FunctionComponent<DataProps> = ({data}) => {
  return (
    <QuoteContainer>
      <p>“{data?.content}”</p>
    </QuoteContainer>
  );
};

export default Quote;
