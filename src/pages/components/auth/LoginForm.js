import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Input from "antd/es/input/Input";
import { UserOutlined, LockFilled } from '@ant-design/icons';
import { Button, message } from 'antd';
import { FacebookFilled, GoogleOutlined } from "@ant-design/icons";
import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";

const StyledLoginForm = styled.form`
display: flex;
justify-content: center;
width: 30vw;
height: 60vh;
padding-top: 36px;
border-radius:4px;
background-color: #fff;
box-shadow: 0 3px 10px 0 rgba(0,0,0,.14);
`;
const FormBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 80%;
width: 80%;
`;
const LoginTitle = styled.span`
width: '60%';
font-size: 24px;
font-weight: bold;
align-self: start;
`;
const LoginDivider = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: #8499b1;
div {
    height: 1px;
    width: 40%;
    background-color: #8499b1;
}
`;
const ThirdPartyLogin = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    button {
        font-size: 18px;
        width: 48%;
        padding: 24px;
        background-image: ${(props) => `url(${props.mediaLogo})`};
    }
`;
const LoginForm = () => {
    const { UserLogin, isAuthenticated } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        isAuthenticated && navigate("/")
    }, [isAuthenticated, navigate])

    const handleClick = () => {
        UserLogin(username, password).then(({ token, error }) => {
            if (!token) {
                message.error(error);
            }
        });
    }
    return <StyledLoginForm>
        <FormBox>
            <LoginTitle>登入</LoginTitle>
            <Input
                placeholder="輸入手機號碼/電子信箱/使用者名稱"
                prefix={<UserOutlined />}
                value={username}
                onChange={e => setUsername(e.target.value)}
                onPressEnter={handleClick}
                style={{ width: '100%', alignSelf: 'center', padding: 8 }} />
            <Input.Password
                placeholder="輸入密碼"
                prefix={<LockFilled />}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onPressEnter={handleClick}
                style={{ width: '100%', alignSelf: 'center', padding: 8 }} />
            <Button
                color="danger"
                variant="solid"
                onClick={handleClick}
                style={{ width: '100%', alignSelf: 'center', fontSize: 16 }}>
                登入
            </Button>
            <LoginDivider>
                <div></div>
                <p>或</p>
                <div></div>
            </LoginDivider>
            <ThirdPartyLogin>
                <Button>
                    <FacebookFilled style={{ fontSize: 24, color: '#0866ff' }} />
                    Facebook
                </Button>
                <Button>
                    <GoogleOutlined style={{ fontSize: 24, color: '#ea4335' }} />
                    Google
                </Button>
            </ThirdPartyLogin>
        </FormBox>
    </StyledLoginForm>;
}
export default LoginForm;