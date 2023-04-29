import { Container, Alert, TitleContainer, Title, Icons, Navigation, StyledLink } from "./styled";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <Container>
            <Alert>
                FRETE GRÁTIS A PARTIR DE R$199,00
            </Alert>
            <TitleContainer>
                <Title>FlOr dE ArOma</Title>
                <Icons>

                   <Link to="/sign-in">
                        <FiUser />
                    </Link>
                    <FiSearch />
                    <FiShoppingCart />
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