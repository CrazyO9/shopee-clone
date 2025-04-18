import React from "react";
import DefaultLayout from "./components/layout/Layout";
import { Breadcrumb } from 'antd';
import styled from "styled-components";
const categoryName = 'dessert';
const productName = 'partycupcake';
const StyledBreadcrumb = styled(Breadcrumb)`
margin: 1.25rem 0;
font-size: .875rem;
`;
const ItemSection = styled.div`
display:flex;
width:50%;
`;
const PuzzleSection = styled.div`
display: flex;
`;
const MainImg = styled.img``;
const ImgPuzzle = styled.img``;
const CustomizeBreadcrumb = () => {
    return <StyledBreadcrumb
        separator=">"
        items={[
            {
                title: '蝦皮商城',
                href: '/',
            },
            {
                title: '甜品/糕點',
                href: `/mall/${categoryName}`,
            },
            {
                title: '【Homemade】祖傳祕方蜂蜜杯子蛋糕',
                href: `/${productName}`,
            },
        ]}
        colorBgTextHover="rgba(0,0,0,1)"
    />;
}
const ProductPage = () => {
    return <DefaultLayout fixedHeader={false} isFill={false}>
        <CustomizeBreadcrumb />
        <ItemSection>
            <MainImg></MainImg>
            <PuzzleSection>
                <ImgPuzzle></ImgPuzzle>
                <ImgPuzzle></ImgPuzzle>
                <ImgPuzzle></ImgPuzzle>
                <ImgPuzzle></ImgPuzzle>
            </PuzzleSection>
        </ItemSection>
        <ItemSection></ItemSection>
    </DefaultLayout>;
}
export default ProductPage;