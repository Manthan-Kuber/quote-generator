import { StyledFooter, FooterText } from "./Footer.styles";

const Footer: React.FunctionComponent = () => {
  return (
    <StyledFooter>
      <FooterText>
        Created by{" "}
        <b>
          <u>Manthan Kuber</u>
        </b>
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;
