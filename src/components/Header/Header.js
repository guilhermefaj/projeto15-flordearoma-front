import { Link } from "react-router-dom";
import { Container, Alert, TitleContainer, Title, Icons, Navigation, StyledLink } from "./styled";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
    return (
        <Container>
            <Alert>
                FRETE GRÁTIS A PARTIR DE R$199,00
            </Alert>
            <TitleContainer>
                <Title>FlOr dE ArOma</Title>
                <Icons>
                    <FiUser />
                    <FiSearch />
                    <Link to="/cart">
                        <FiShoppingCart />
                    </Link>
                </Icons>
            </TitleContainer>
            <Navigation>
                <ul>
                    <li>
                        <StyledLink to="/" className="perfumaria">
                            PERFUMARIA
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/" className="cabelos">
                            CABELOS
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/" className="corpo-e-banho">
                            CORPO E BANHO
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/" className="maquiagem">
                            MAQUIAGEM
                        </StyledLink>
                    </li>
                </ul>
            </Navigation>
        </Container>
    )
}