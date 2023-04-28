import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CheckoutPage() {

    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cep, setCep] = useState("");
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");

    return (
        <CheckoutContainer>
            <Checkout>
                <h1>
                    FINALIZAR A COMPRA
                </h1><br />
                <h2>Faça login, preencha suas informações e finalize a compra!</h2>
            </Checkout>
            <InformationsContainer>
                <ContactInformation token={token} user={user}>
                    <div className="titleInfo">Informações de contato</div>
                    <div className="login">
                        <Link to="/sign-in" >
                            Já tem uma conta? <span>Faça login!</span>
                        </Link>
                        <Link to="/sign-up" >
                            Não tem uma conta? <span>Cadastre-se!</span>
                        </Link>
                    </div>
                    <div className="contact">
                        <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png" alt="userImage" />
                        <div>
                            <h2>Olá, {user}</h2>
                            <button>SAIR</button>
                        </div>
                    </div>
                </ContactInformation>
                <ShippingAdress>
                    <div className="titleInfo">Endereço de entrega</div>
                    <div className="form">
                        <input required type="text" placeholder="Nome completo (destinatário)" value={name} onChange={e => setName(e.target.value)} />
                        <input required type="text" placeholder="Endereço (Rua, complemento, bairro)" value={address} onChange={e => setAddress(e.target.value)} />
                        <div>
                            <input required type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                            <input required type="text" placeholder="Estado" value={state} onChange={e => setState(e.target.value)} />
                            <input required type="text" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)} />
                        </div>
                    </div>

                </ShippingAdress>
                <Payment>
                    <div className="titleInfo">Método de pagamento
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4d-CfG_gVfFANlhqYkbPZkftm__D9oweLnQ&usqp=CAU" alt="" />
                    </div>
                    <div className="form">
                        <div>
                            <input required type="number" placeholder="Número do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                            <input required type="text" placeholder="Nome no cartão" value={nameOnCard} onChange={e => setNameOnCard(e.target.value)} />
                        </div>
                        <div>
                            <input required type="text" placeholder="Data de expiração (mm/aa)" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
                            <input required type="number" placeholder="CVV" value={securityCode} onChange={e => setSecurityCode(e.target.value)} />
                        </div>
                    </div>
                </Payment>
                <CheckoutButton>CONCLUIR COMPRA</CheckoutButton>
            </InformationsContainer>

        </CheckoutContainer>
    )
}

const CheckoutButton = styled.button`
    width: 245px;
    padding-left: 20px;
    padding-right: 20px;
    height: 35px;
    background-color: #4F8165;
    color: #FFFFFF;
    font-family: "DM Sans", sans-serif;
    font-size:12px;
    font-weight:500;
    line-height:15px;
    letter-spacing: 2.4px;
    border: none;
    margin-top: 25px;
    align-self: flex-end;
    cursor:pointer;
    opacity: ${({ disabled }) => disabled === true ? "70%" : "100%"};
    background-image: linear-gradient(to right, #4F8165, green);
    background-size: 200% auto; 
    transition: background-position 0.5s ease; 
    &:hover{
        background-position: -100% center;
        background-color: white;
    }
`

const ContactInformation = styled.div`

.login{
    display: ${({ token }) => token ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    gap:15px;
}
a{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #545454;
}
img{
    width: 60px;
    height: auto;
}
.contact {
    display: ${({ token }) => !token ? "none" : "flex"};
    gap:20px;
    align-items: center;
}
button{
    width: 46px;
    height: 20px;
    background-color: #4F8165;
    color: #FFFFFF;
    font-family: "DM Sans", sans-serif;
    font-size:14px;
    font-weight:500;
    line-height:15px;
    letter-spacing: 2.4px;
    border: none;
    border-radius: 3px;
    cursor:pointer;
}

`
const ShippingAdress = styled.div`

`
const Payment = styled.div`
`
const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f3f6f4;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 80px;
    height: fit-content;
    span{
        font-weight: 500;
        color:#1F2622;
    }
    h2{
        font-size:14x;
        font-weight:400;
        color:#6A6A6A;
        margin-bottom: 10px;
    }
`

const Checkout = styled.div`
    margin-top:60px; 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    h1{
        font-size:16px;
        font-weight:500;
        letter-spacing: 4px;
        color:#1F2622;
        
    }
`

const InformationsContainer = styled.div`
    padding: 0px 35px 29px 35px;
    margin-top: 35px;
    width: 60%;
    height: 300px;
    height: fit-content;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    .titleInfo{
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 23px;
    font-weight: 400;
    color: #333333;
    margin-bottom: 15px;
    border-bottom: 1px solid #DADDDB;
    margin-top:30px;
    img{
        height: 30px;
        margin-left: 20px;
    }
    }
    input {
        margin-bottom: 6px;
        width: 100%;
        height: 45px;
        border: solid 1px #D4D4D4;
        border-radius: 5px;
        padding: 0 11px;
        &::placeholder{
        color:#6A6A6A;
        font-size:14px;
        line-height:25px;
        }
}
.form div{
    display: flex;
    gap:15px;
}
.form{
    width:80%;
}

`