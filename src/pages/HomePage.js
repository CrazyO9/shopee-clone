import React from "react";
import DefaultLayout from "./components/layout/Layout";
import ClearFixed from "./components/ClearFixed";
import styled from "styled-components";
import { Carousel } from "antd";
import { RollbackOutlined, TruckOutlined, SafetyOutlined } from "@ant-design/icons";
import Banner1 from "./components/imgs/banners/banner1.avif"
import Banner2 from "./components/imgs/banners/banner2.avif"
import Banner3 from "./components/imgs/banners/banner3.avif"
import { Link } from "react-router-dom";
import ProductCard from "./components/product/ProductCard";
import PopupModal from "./components/PopupModal";

const BannerBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:stretch;
    flex-wrap:wrap;
`;
const BannerFeatureContainer = styled(BannerBox)`
margin-bottom: 24px;
padding: 8px -4px;
border-bottom: 1px solid rgba(0,0,0,.1);
border-right: 1px solid rgba(0,0,0,.1);
border-left: 1px solid rgba(0,0,0,.1);
`;
const BannerSecsionContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;
@media (min-width: 1353px) {
    width: ${(props => `${props.width}`)}%;
    height: 100%;
}
`;
const BannerContainer = styled.div`
width: 100%;
@media (min-width: 1353px) {

}
`;
const ProductCollectionContainer = styled(BannerBox)`
display: flex;
justify-content: space-between;
align-content: center;
width: 100%;
`;
const BannerImage = styled.div`
width: 100%;
height: ${(props => `${props.height}`)}px;
background-image: ${(props) => `url(${props.url})`};
background-position: center;
background-size: cover;
`;
const BannerFeature = styled.div`
display:flex;
justify-content:center;
width: 33.33%;
`;
const BannerFeatureSection = styled.div`
padding: 4px;
`;
const BannerFeatureTilte = styled.div`
font-weight:bold;
font-style: 16px;
`;
const BannerFeatureDescript = styled.div`
font-style: 8px;
`;
const CustomizeImage = styled(BannerImage)`
margin-bottom: 24px;
`;
const ProductCotainer = styled.div`
width: 33%;
@media (min-width: 769px) {
    width: 16%;
}
`;
const StyledCarousel = styled(Carousel)`
height: 100%;
`;
const HomePage = () => {
    return <DefaultLayout fixedHeader={true} isFill={false}>
        <ClearFixed />
        <PopupModal />
        <BannerBox>
            <BannerSecsionContainer width={66.5}>
                <StyledCarousel autoplay>
                    <Link to="/">
                        <BannerImage height={200} url={Banner1}></BannerImage>
                    </Link>
                    <Link to="/">
                        <BannerImage height={200} url={Banner2}></BannerImage>
                    </Link>
                    <Link to="/">
                        <BannerImage height={200} url={Banner3}></BannerImage>
                    </Link>
                </StyledCarousel>
            </BannerSecsionContainer>
            <BannerSecsionContainer width={33.4} style={{ justifyContent: 'space-between' }}>
                <BannerContainer style={{ paddingBottom: 2 }}>
                    <Link to="/">
                        <BannerImage height={99} url={Banner2}></BannerImage>
                    </Link>
                </BannerContainer>
                <BannerContainer style={{ paddingBottom: 2 }}>
                    <Link to="/">
                        <BannerImage height={99} url={Banner3}></BannerImage>
                    </Link>
                </BannerContainer>
            </BannerSecsionContainer>
        </BannerBox>
        <BannerFeatureContainer>
            <BannerFeature>
                <RollbackOutlined style={{ fontSize: 24, color: '#d1011d' }} />

                <BannerFeatureSection>
                    <BannerFeatureTilte>
                        15天鑑賞期
                    </BannerFeatureTilte>
                    <BannerFeatureDescript>
                        首推15天鑑賞期，延長買家鑑賞時程
                    </BannerFeatureDescript>
                </BannerFeatureSection>
            </BannerFeature>
            <BannerFeature>
                <TruckOutlined style={{ fontSize: 24, color: '#d1011d' }} />
                <BannerFeatureSection>
                    <BannerFeatureTilte>
                        退貨無負擔
                    </BannerFeatureTilte>
                    <BannerFeatureDescript>
                        配合黑毛宅配到府收件，退貨安心無負擔
                    </BannerFeatureDescript>
                </BannerFeatureSection>
            </BannerFeature>
            <BannerFeature>
                <SafetyOutlined style={{ fontSize: 24, color: '#d1011d' }} />
                <BannerFeatureSection>
                    <BannerFeatureTilte>
                        假一賠二
                    </BannerFeatureTilte>
                    <BannerFeatureDescript>
                        非正貨蝦皮承諾退款再賠償該商品金額
                    </BannerFeatureDescript>
                </BannerFeatureSection>
            </BannerFeature>
        </BannerFeatureContainer>
        <CustomizeImage height={200} url={Banner2} />
        <ProductCollectionContainer>
            <ProductCotainer>
                <ProductCard linkTo="/123" title="HAHAHA" coverUrl={Banner2} listPrices={[123]} salePrices={[123]} />
            </ProductCotainer>
            <ProductCotainer>
                <ProductCard linkTo="/123" title="HAHAHA" coverUrl={Banner2} listPrices={[123]} salePrices={[123]} />
            </ProductCotainer>
            <ProductCotainer>
                <ProductCard linkTo="/123" title="HAHAHA" coverUrl={Banner2} listPrices={[123]} salePrices={[321]} />
            </ProductCotainer>
            <ProductCotainer>
                <ProductCard linkTo="/123" title="HAHAHA" coverUrl={Banner2} listPrices={[123]} salePrices={[321]} />
            </ProductCotainer>
            <ProductCotainer>
                <ProductCard linkTo="/123" title="HAHAHA" coverUrl={Banner2} listPrices={[123]} salePrices={[321, 456]} />
            </ProductCotainer>
            <ProductCotainer>
                <ProductCard linkTo="/123" title="HAHAHA" coverUrl={Banner2} listPrices={[123]} salePrices={[321, 456]} />
            </ProductCotainer>
        </ProductCollectionContainer>
    </DefaultLayout>;
}
export default HomePage;