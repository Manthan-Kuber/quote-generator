import { useEffect, useState } from "react";
import GlobalStyles from "./GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AppWrapper } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import { dataItem } from "./types";
import AuthorPage from "./pages/Author/AuthorPage";
import HomePage from "./pages/Home/HomePage";

export const BaseUrl = "https://api.quotable.io";

const App: React.FunctionComponent = () => {
  const [data, setData] = useState<dataItem>();

  const fetchData = async (): Promise<void> => {
    const response = await fetch(`${BaseUrl}/random`);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DataProps = {
    data: data,
  };

  const NavProps = {
    onClick: fetchData,
  };

  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Navbar {...NavProps} />
        <Routes>
          <Route path="/" element={<HomePage {...DataProps} />} />
          <Route path="/author" element={<AuthorPage {...DataProps} />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </>
  );
};

export default App;
