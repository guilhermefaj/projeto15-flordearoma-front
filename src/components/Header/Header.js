import { Container, Alert, TitleContainer, Title, Icons } from "./styled";
import { FiUser, FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Header() {
    return (
        <Container>
            <Alert>
                FRETE GRÁTIS A PARTIR DE R$199,00
            </Alert>
            <TitleContainer>
                <Title>Flor de aroma</Title>
                <Icons>
                    <FiUser />
                    <FiSearch />
                    <FiShoppingCart />
                </Icons>
            </TitleContainer>
            <nav>

            </nav>
        </Container>
    )
}

