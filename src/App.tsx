import { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";

const App: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Ran useEffect");
    const fetchData = async (): Promise<void> => {
      const response = await fetch(
        "https://quote-garden.herokuapp.com/api/v3/quotes"
      );
      const data = await response.json();
      setData(data);
      console.log(data.data[0]);
    };
    fetchData();
  }, []);

  interface dataItem {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: 0;
  }

  return (
    <>
      <GlobalStyles />
      <h1>HI</h1>
    </>
  );
};

export default App;
