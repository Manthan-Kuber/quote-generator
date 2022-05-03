import { Nav, RandomContainer } from "./Navbar.styles";
import { ImSpinner11 } from "react-icons/im";

const Navbar = ({ onClick }: { onClick: () => Promise<void> }) => {
  return (
    <Nav>
      <RandomContainer onClick={() => onClick()}>
        <h1>Random</h1>
        <ImSpinner11 className="icon" />
      </RandomContainer>
    </Nav>
  );
};

export default Navbar;
