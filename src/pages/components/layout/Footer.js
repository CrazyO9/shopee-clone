import styled from "styled-components";
import Container from "./Container";

const StyledFooter = styled.footer`
background-color: #fbfbfb;
padding: 40px 0;
`;

const Footer = () => {
    return <StyledFooter>
        <Container>
            this is footer
        </Container>
    </StyledFooter>;
}

export default Footer;