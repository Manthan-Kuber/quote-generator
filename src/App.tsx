import { useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AppWrapper } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const App: React.FunctionComponent = () => {
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
