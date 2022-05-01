import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import { AppWrapper, Footer, FooterText } from "./App.styles";

const App: React.FC = () => {
  const [data, setData] = useState<dataItem>();

  const fetchData = async (): Promise<void> => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  interface dataItem {
    _id: string;
    author: string;
    authorSlug: string;
    content: string;
    dataAdded: string;
    dataModified: string;
    length: number;
    tags: Array<string>;
  }

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <h1>HI</h1>
        <Footer>
          <FooterText>
            Created by{" "}
            <b>
              <u>Manthan Kuber</u>
            </b>
          </FooterText>
        </Footer>
      </AppWrapper>
    </>
  );
};

export default App;
