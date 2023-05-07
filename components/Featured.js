import styled from "styled-components";
import Centre from "./Centre";
import Button from "./Button";
const Bg = styled.div`
  background-color: #3c4048;
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
  return (
    <Bg>
      <Centre>
        <ColumnWrapper>
          <Column>
            <div>
              {" "}
              <Title>{product.title}</Title>
              <Desc>{product.description}</Desc>
              <ButtonWrapper>
                <Button white outline size="l">
                  Read More
                </Button>
                <Button primary size="l">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <div>
            <img
              src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1683384945/mbp14-silver2_ad5u0h.png"
              alt="Product image"
            />
          </div>
        </ColumnWrapper>
      </Centre>
    </Bg>
  );
}
