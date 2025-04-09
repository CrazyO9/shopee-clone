import React from "react";
import Container from "./components/layout/Container";
import DefaultLayout from "./components/layout/Layout"
import styled from "styled-components";

const LogginContainer = styled(Container)`
width: 100vw;
height: 200px;
background-color: #ec6729;
`;

const LogginPage = () => {
    return <DefaultLayout fixedHeader={false} isFill={true}>
        <LogginContainer>
        </LogginContainer>
    </DefaultLayout>;
}
export default LogginPage;