import React from "react";
import Container from "./components/layout/Container";
import DefaultLayout from "./components/layout/Layout"
import styled from "styled-components";
import LoginImg from "./components/imgs/login/loginImg.avif";
import LoginForm from "./components/auth/LoginForm";

const LoginContainer = styled(Container)`
display:flex;
justify-content: center;
width: 100vw;
height: 80vh;
background-color:#ec6729;
`;
const LoginSection = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 50%;
`;
const StyledLoginImg = styled.img`
width: 40vh;
border-radius: 4px;
`;

const LoginPage = () => {
    return (<DefaultLayout
        fixedHeader={false}
        isFill={true}
    >
        <LoginContainer>
            <LoginSection>
                <StyledLoginImg src={LoginImg} />
            </LoginSection>
            <LoginSection>
                <LoginForm />
            </LoginSection>
        </LoginContainer>
    </DefaultLayout>);
}
export default LoginPage;