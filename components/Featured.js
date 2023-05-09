import styled from "styled-components";
import Centre from "./Centre";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const Bg = styled.div`
  background-color: #20262e;
  color: #eaeaea;
  padding: 50px 0;
`;
const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;
const Desc = styled.p`
  color: #eaeaea;
  font-size: 1rem;
  line-height: 20px;
`;
const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }

  return (
    <Bg>
      <Centre>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <ButtonLink
                  href={"/product/" + product._id}
                  white={1}
                  outline={1}
                  size="l"
                >
                  Read More
                </ButtonLink>
                <Button primary size="l" onClick={addFeaturedToCart}>
                  <CartIcon />
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <div>
            <img
              src="https://next-aman-ecommerce.s3.amazonaws.com/1683444483272.webp"
              alt="Productimage"
            />
          </div>
        </ColumnWrapper>
      </Centre>
    </Bg>
  );
}
