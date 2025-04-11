import styled from "styled-components";
import Container from "./Container";
import Logo from "../imgs/icons8-shopee-100.png";
import TextLogo from "../imgs/shopee-text-logo.png";
import { Link, useLocation } from "react-router-dom";
import { Input } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import AuthContext from "../auth/authContext";

const { Search } = Input;
const onSearch = (value, _e, info) =>
    console.log(info === null || info === void 0 ? void 0 : info.source, value);

const StyledHeader = styled.header`
background-color: ${(props) => props.BGC ? props.BGC : '#d1011d'};
width: 100vw;
padding: 16px 0;
`;
const StyledHeaderSession = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding-top: 8px;
`;
const Navgator = styled.div`
a{
    margin: 0 4px;
    color: #fff;
    text-decoration-line: none;
}
`;
const Toolbar = styled.div`
a{
    margin: 0 8px;
    color: #fff;
    text-decoration-line: none;
}
`;
const StyledLogo = styled.img`
height: 40px;
`;
const StyledTextLogo = styled.img`
`;

const Header = ({ headerColor }) => {
    const { isAuthenticated, LoginUsername, UserLogout } = useContext(AuthContext);
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const logout = () => {
        UserLogout();
    }
    return <StyledHeader BGC={headerColor}>
        <Container>
            <StyledHeaderSession>
                <Navgator>
                    <a href="#!">蝦皮購物</a>
                    <a href="#!">下載</a>
                    <a href="#!">聯絡我們</a>
                    <a href="#!">部落格</a>
                </Navgator>
                <Toolbar>
                    <a href="#!">通知</a>
                    <a href="#!">幫助中心</a>
                    {isAuthenticated ? (
                        <>
                            <Link to="/">{LoginUsername}</Link>
                            <span onClick={() => logout()}>登出</span>
                        </>
                    ) : (
                        <Link to="/login">帳號</Link>)}
                </Toolbar>
            </StyledHeaderSession>
            <StyledHeaderSession>
                <StyledHeaderSession>
                    <Link to="/mall">
                        <StyledLogo src={Logo}></StyledLogo>
                        <StyledTextLogo src={TextLogo}></StyledTextLogo>
                    </Link>
                </StyledHeaderSession>
                {!isLoginPage && <StyledHeaderSession>
                    <Search
                        style={{ marginRight: 8 }}
                        placeholder="在商城搜尋"
                        onSearch={onSearch}
                        enterButton />
                    <Link to="/cart">
                        <ShoppingCartOutlined style={{ fontSize: 32, color: '#FFF' }} />
                    </Link>
                </StyledHeaderSession>}
            </StyledHeaderSession>
        </Container>
    </StyledHeader>
}
export default Header;