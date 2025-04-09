import styled from "styled-components";
import Container from "./Container";
import { Link } from "react-router-dom";
import CSVLogo from '../imgs/shoplogo.png'
import ReduceSign from '../imgs/reduceSign.png';
import MasterCradLogo from '../imgs/masterCard.png';
import JCBLogo from '../imgs/JCB.png';
import VISALogo from '../imgs/VISA.png';
import QRCode from '../imgs/QRCode.png';
import AppStore from '../imgs/appstore.png';
import GooglePlay from '../imgs/googleplay.png';
import AppGellxy from '../imgs/appgellexy.png';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";

const StyledFooter = styled.footer`
background-color: #fbfbfb;
padding: 40px 0;
`;
const FooterColumn = styled.div`
display:flex;
flex-direction:column;
width: 33.33%;
@media (min-width: 769px) {
    width: 20%;
    margin-bottom: 8px;
}
a {
    margin-bottom:12px;
    text-decoration:none;
    color:rgba(0,0,0,.54);
    &:hover{
        color: #d1011d;
    }
}
`;
const FlexBox = styled.div`
display:flex;
flex-wrap: wrap;
`;
const FooterColumnTitle = styled.h4`
font-weight:bold;
`;
const Footer = () => {
    return <StyledFooter>
        <Container>
            <FlexBox>
                <FooterColumn>
                    <FooterColumnTitle>客服中心</FooterColumnTitle>
                    <Link to="/">幫助中心</Link>
                    <Link to="/">蝦皮商城</Link>
                    <Link to="/">付款方式</Link>
                    <Link to="/">蝦皮錢包</Link>
                    <Link to="/">蝦幣</Link>
                    <Link to="/">運費補助</Link>
                    <Link to="/">退貨退款</Link>
                    <Link to="/">物流方式</Link>
                    <Link to="/">聯絡客服</Link>
                    <Link to="/">防詐騙宣傳</Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>付款</FooterColumnTitle>
                    <Link to="/">關於蝦皮</Link>
                    <Link to="/">加入我們</Link>
                    <Link to="/">蝦皮條款</Link>
                    <Link to="/">隱私權政策</Link>
                    <Link to="/">蝦皮商城</Link>
                    <Link to="/">賣家中心</Link>
                    <Link to="/">限時特賣</Link>
                    <Link to="/">聯絡媒體</Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>付款</FooterColumnTitle>
                    <FlexBox>
                        <img src={MasterCradLogo} alt="MasterCradLogo" style={{ width: "20%" }} />
                        <img src={JCBLogo} alt="JCBLogo" style={{ width: "20%" }} />
                        <img src={VISALogo} alt="VISALogo" style={{ width: "20%" }} />
                    </FlexBox>
                    <FooterColumnTitle>物流合作</FooterColumnTitle>
                    <img src={CSVLogo} alt="csv_logo" style={{ width: "60%" }} />
                    <FooterColumnTitle>蝦皮24H包裝減量標章</FooterColumnTitle>
                    <img src={ReduceSign} alt="ReduceSign" style={{ width: "20%" }} />
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>關注我們</FooterColumnTitle>
                    <Link to="/" >
                        <FacebookOutlined style={{ fontSize: 24, marginRight: 4 }} />
                        FaceBook
                    </Link>
                    <Link to="/">
                        <InstagramOutlined style={{ fontSize: 24, marginRight: 4 }} />
                        Instagram
                    </Link>
                    <Link to="/">Line</Link>
                    <Link to="/">
                        <LinkedinOutlined style={{ fontSize: 24, marginRight: 4 }} />
                        LinkedIn
                    </Link>
                    <Link to="/">蝦品輯部落格</Link>
                </FooterColumn>
                <FooterColumn>
                    <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
                    <FlexBox >
                        <img src={QRCode} alt="qrcode" style={{ marginRight: 12 }} />
                        <FlexBox style={{ flexDirection: "column" }}>
                            <img src={AppStore} alt="AppStore" style={{ padding: 8 }} />
                            <img src={GooglePlay} alt="GooglePlay" style={{ padding: 8 }} />
                            <img src={AppGellxy} alt="AppGellxy" style={{ padding: 8 }} />
                        </FlexBox>
                    </FlexBox>
                </FooterColumn>
            </FlexBox>
        </Container>
    </StyledFooter>;
}

export default Footer;