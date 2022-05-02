import { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AppWrapper } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { dataItem } from "./types";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<dataItem>();

  const fetchData = async (): Promise<void> => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HomeProps = {
    data: data,
  };

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home {...HomeProps} />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
