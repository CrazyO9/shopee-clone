import styled from "styled-components";
import Container from "./Container";

const StyledHeader = styled.header`
background-color: #d1011d;
height: 20vh;
width: 100vw;
`;

const Header = () => {
    return <StyledHeader>
        <Container>
            this is fixed header.
        </Container>
    </StyledHeader>
}
export default Header;