import { BackIcon, Nav, RandomContainer } from "./Navbar.styles";
import { ImSpinner11 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ onClick }: { onClick: () => Promise<void> }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Nav iconAlign={location.pathname === '/author' ? true : false} >
      {location.pathname === "/author" && (
        <BackIcon size={30} onClick={() => navigate(-1)} />
      )}
      <RandomContainer onClick={onClick}>
        <h1>Random</h1>
        <ImSpinner11 className="icon" />
      </RandomContainer>
    </Nav>
  );
};

export default Navbar;
