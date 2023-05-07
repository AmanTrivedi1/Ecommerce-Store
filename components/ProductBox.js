import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #20262e;
  padding: 20px;
  text-align: center;
  display: flex;
  height: 120px;
  justify-content: center;
  border-radius: 5px;
  img {
    max-width: 100%;
    object-fit: contain;
    max-height: 100px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  color: inherit;
  text-decoration: none;
  font-size: 0.9rem;
`;
const ProdcutInfoBox = styled.div`
  margin-top: 5px;
`;
const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;
const Price = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const url = "/product/+_id";
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images[2]} alt="product image" />
      </WhiteBox>
      <ProdcutInfoBox>
        <Title href={url}> {title}</Title>
        <PriceRow>
          <Price> ${price}</Price>
          <div>
            {" "}
            <Button primary outline>
              Add to <CartIcon />
            </Button>
          </div>
        </PriceRow>
      </ProdcutInfoBox>
    </ProductWrapper>
  );
}
