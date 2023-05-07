import styled from "styled-components";
import Centre from "./Centre";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 30px;
`;
const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: 500;
`;
export default function NewProducts({ products }) {
  return (
    <Centre>
      <Title>New Arrivals</Title>
      <ProductsGrid>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductBox key={product._key} {...product} />
          ))}
      </ProductsGrid>
    </Centre>
  );
}
