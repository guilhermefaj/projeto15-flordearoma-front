import { Container, TopFooter, InfoFooter, FormContainer, InfoContainer, BottomFooter } from "./styled"

export default function Footer() {
    return (
        <Container>
            <TopFooter>
                FlOr dE ArOma
            </TopFooter>
            <InfoFooter>
                <FormContainer>
                    <h2>RECEBA NOSSAS PROMOÇÕES</h2>
                    <form>
                        <input
                            name="email"
                            placeholder="E-mail"
                            type="email"
                        />
                        <button>
                            INSCREVA-SE
                        </button>
                    </form>
                </FormContainer>
                <InfoContainer>
                    <h2>SUPORTE</h2>
                    <div>Conta</div>
                    <div>Contato</div>
                    <div>FAQ's</div>
                    <div>Política de Entrega</div>
                    <div>Política de Devolução</div>
                    <div>Termos de Serviço</div>
                    <div>Política de Reembolso</div>
                </InfoContainer>
                <InfoContainer>
                    <h2>CATEGORIAS</h2>
                    <div>Perfumaria</div>
                    <div>Cabelos</div>
                    <div>Corpo e Banho</div>
                    <div>Maquiagem</div>
                </InfoContainer>
                <InfoContainer>
                    <h2>SOBRE NÓS</h2>
                    <div>Nossa loja</div>
                    <div>Torne-se Associado</div>
                    <div>Sustentabilidade</div>
                    <div>Nossas Marcas</div>
                    <div>Encontre-nos Perto de Você</div>
                </InfoContainer>
            </InfoFooter>
            <BottomFooter>
                © FLOR DE AROMA 2023
            </BottomFooter>
        </Container>
    )
}