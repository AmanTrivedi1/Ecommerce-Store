import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Centre from "@/components/Centre";
import Header from "@/components/Header";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post("/api/cart", { ids: cartProducts }).then((response) => {
        setProducts(response.data);
      });
    }
  }, [cartProducts]);
  console.log(products);
  return (
    <>
      <Header />
      <Centre>
        <ColumnsWrapper>
          <Box>
            {!cartProducts?.length && (
              <div>
                <p>Your cart is empty</p>
              </div>
            )}
            {products?.length > 0 && (
              <>
                <h2>Cart Products</h2>
                {products.map((product) => (
                  <div key={product}>{product.title}</div>
                ))}
              </>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order Information</h2>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Address 2" />
              <Button primary block size={"l"}>
                Countinue to Payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Centre>
    </>
  );
}
