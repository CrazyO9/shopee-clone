import React from "react";
import DefaultLayout from "./components/layout/Layout";
import ClearFixed from "./components/ClearFixed";
import styled from "styled-components";

const BannerBox = styled.div`
display:flex;
`;
const BannerCarouselContainer = styled.div`
width: 66.7%;
`;
const BannerContainer = styled.div`
width: 100%;
`;

const HomePage = () => {
    return <DefaultLayout fixedHeader={true}>
        <ClearFixed />
        <BannerBox>
            <BannerCarouselContainer></BannerCarouselContainer>
            <>
            <BannerContainer></BannerContainer>
            <BannerContainer></BannerContainer>
            </>
        </BannerBox>
    </DefaultLayout>;
}
export default HomePage;