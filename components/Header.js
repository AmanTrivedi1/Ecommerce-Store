import Link from "next/link";
import styled from "styled-components";
import Centre from "./Centre";
const StyledHeader = styled.header`
  background-color: #20262e;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const NavLink = styled(Link)`
  color: #eaeaea;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Centre>
        <Wrapper>
          <Link href={"/"}>
            <img
              className=""
              style={{ width: "120px" }}
              src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1683451007/dotSTORE_phtrvy.png"
              alt="Logo"
            />
          </Link>
          <nav>
            <StyledNav>
              <NavLink href={"/"}>Home</NavLink>
              <NavLink href={"/products"}>All Products</NavLink>
              <NavLink href={"/categories"}>Categories</NavLink>
              <NavLink href={"/account"}>Account</NavLink>
              <NavLink href={"/cart"}>Cart (0)</NavLink>
            </StyledNav>
          </nav>
        </Wrapper>
      </Centre>
    </StyledHeader>
  );
}
