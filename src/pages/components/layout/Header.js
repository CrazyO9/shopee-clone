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

const StyledHeader = styled.header`
background-color: ${(props) => props.BGC ? props.BGC : '#d1011d'};
width: 100vw;
`;
const StyledHeaderSession = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 8px 0 ;
`;
const Navgator = styled.div`
a{
    margin: 0 4px;
    color: #fff;
    text-decoration-line: none;
}
`;
const Toolbar = styled.div`
    color: #fff;
    a{
    color: #fff;
    margin: 0 8px;
    text-decoration-line: none;
}
`;
const StyledLogo = styled.img`
height: 40px;
`;
const StyledTextLogo = styled.img`
`;
const StyledSearch = styled(Search)`
margin-right: 24px;
width: 40vw;
button {
    background-color: #d1011d;
    border: 4px solid #fff;
    
}
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
                    <Link to="/123">蝦皮購物</Link>
                    <Link to="/123">下載</Link>
                    <Link to="/123">聯絡我們</Link>
                    <Link to="/123">部落格</Link>
                </Navgator>
                <Toolbar>
                    <Link to="/123">通知</Link>
                    <Link to="/123">幫助中心</Link>
                    {isAuthenticated ? (
                        <>
                            <Link to="/">{LoginUsername}</Link>
                            <span onClick={logout} style={{ cursor: 'pointer' }}>登出</span>
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
                    <StyledSearch
                        placeholder="在商城搜尋"
                        onSearch={""}
                        size="large"
                        enterButton
                        addonBg="rgba(209,1,29,0)"
                        allowClear />
                    <Link to="/cart">
                        <ShoppingCartOutlined style={{ fontSize: 32, color: '#FFF' }} />
                    </Link>
                </StyledHeaderSession>}
            </StyledHeaderSession>
        </Container>
    </StyledHeader>
}
export default Header;