import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

const ListPriceLabel = styled.span`
color: #757575;
margin-right: 4px;
text-decoration-line:line-through;
`;
const SalePriceLabel = styled(ListPriceLabel)`
color: #ee4c2d;
font-weight: bold;
font-size: 16px;
text-decoration-line: none;
`;
const ProductCard = ({
    coverUrl,
    title,
    listPrices,
    salePrices,
    discountPercentage,
    saleNumber,
    rationg,
    isLiked,
    linkTo
}) => {
    return <Link to={linkTo} style={{textDecorationLine: 'none'}}>
        <Card
            hoverable
            style={{ width: '100%' }}
            cover={<img alt="cover" src={coverUrl} />}
        >
            <Meta
                title={title}
                description={<div>
                    {listPrices && listPrices.length > 0 && salePrices.length === 1 && (
                        <ListPriceLabel>${listPrices}</ListPriceLabel>
                    )}
                    {salePrices && salePrices.length > 1 && (
                        <SalePriceLabel>${salePrices[0]}-{salePrices[1]}</SalePriceLabel>
                    )}
                    {salePrices && salePrices.length === 1 && (
                        <SalePriceLabel>${salePrices[0]}</SalePriceLabel>
                    )}
                </div>} />
        </Card>
    </Link >;
}

export default ProductCard;