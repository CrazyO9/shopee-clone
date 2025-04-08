import styled, { css } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const PageHeader = styled.div`
    z-index:1;
    ${(props) =>
        props.fixed &&
        css`
            position: fixed;
    `};
`;

const DefaultLayout = ({ fixedHeader, children }) => {
    return (<>
        <PageHeader fixed={fixedHeader} >
            <Header />
        </PageHeader>
        <Container>{children}</Container>
        <Footer />
    </>)
}

export default DefaultLayout;