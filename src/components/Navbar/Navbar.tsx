import { Nav, RandomContainer } from "./Navbar.styles";
import { ImSpinner11 } from "react-icons/im";

const Navbar:React.FunctionComponent = () => {
  return (
    <Nav>
      <RandomContainer>
        <h1>Random</h1>
        <ImSpinner11 className="icon" />
      </RandomContainer>
    </Nav>
  );
};

export default Navbar;
