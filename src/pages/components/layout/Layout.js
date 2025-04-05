import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const PageHeader = styled.div`
    position: ${(props) => (props.fixed ? "fixed" : "static")};
`;

const DefaultLayout = ({ fixedHeader, children }) => {
    return (<>
        <PageHeader fixed={fixedHeader}>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer>This is Footer</Footer>
        </PageHeader>
    </>)
}

export default DefaultLayout;