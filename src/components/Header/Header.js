import { Link } from "react-router-dom";
import { Container, Alert, TitleContainer, Title, Icons, Navigation, StyledLink } from "./styled";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import Context from "../../contexts/Context";
import styled from "styled-components";



export default function Header() {
  const { cartProducts } = useContext(Context);
  const cartCount = cartProducts.length;

  const handleUserClick = () => {
    const token = localStorage.getItem("token");

    if (token) {
      const confirmLogout = window.confirm("Deseja sair da conta?");

      if (confirmLogout) {
        localStorage.removeItem("token");
        window.location.href = "/sign-in";
      }
    } else {
      window.location.href = "/sign-in";
    }
  };

  return (
    <Container>
      <Alert>
        FRETE GRÁTIS A PARTIR DE R$199,00
      </Alert>
      <TitleContainer>
        <Title>FlOr dE ArOma</Title>
        <Icons>
          
            <FiUser onClick={handleUserClick}/>
         
          <FiSearch />
          <Link to="/cart">
            <CartIcon hasItems={cartCount > 0} />
            {cartCount > 0 && <CartCount>{cartCount}</CartCount>}
          </Link>
        </Icons>
      </TitleContainer>
      <Navigation>
        <ul>
          <li>
            <StyledLink to="/perfumaria" className="perfumaria">
              PERFUMARIA
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/cabelos" className="cabelos">
              CABELOS
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/body" className="corpo-e-banho">
              CORPO E BANHO
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/make" className="maquiagem">
              MAQUIAGEM
            </StyledLink>
          </li>
        </ul>
      </Navigation>
    </Container>
  )
}




const CartIcon = styled(FiShoppingCart)`
  color: ${props => props.hasItems ? "red" : "black"};
  position: relative;
`;

const CartCount = styled.span`
  color: red;
  font-size: 0.8rem;
  position: absolute;

  right: -8px;
  transform: translateY(-50%);
`;