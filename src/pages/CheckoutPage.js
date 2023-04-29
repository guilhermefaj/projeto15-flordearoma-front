import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Context from "../contexts/Context";
import api from "../axios";
import { ThreeDots } from "react-loader-spinner";

export default function CheckoutPage() {
    const { cartProducts, setCartProducts, total, productCount } = useContext(Context);
    const [disabled, setDisabled] = useState(false);
    const [textButton, setTextButton] = useState("CONCLUIR COMPRA");
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    const [logged, setLogged] = useState(true);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cep, setCep] = useState("");
    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const navigate = useNavigate();
    const idsCartProducts = cartProducts.map(p => p.id);

    function logOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLogged(false);
    }

    function checkout(e) {
        e.preventDefault();
        if (token === null) {
            return alert("É necessário logar para concluir a compra.");
        }
        setDisabled(true);
        setTextButton("");
        setLoading(true);

        const obj = {
            token,
            productCount,
            total,
            address,
            city,
            state,
            cep,
            name,
            cardNumber,
            nameOnCard,
            expirationDate,
            securityCode
        }
        const putObj = {
            idsCartProducts
        }

        const request = api.post("/sales", obj);

        request.then(response => {
            const putRequest = api.put("/products", putObj);

            putRequest.then(() => {
                alert("Obrigado por comprar com a Flor de Aroma!");
                localStorage.removeItem("cart");
                setCartProducts([]);
                navigate("/");
            })

            putRequest.catch(err => {
                alert(err.response.data);
            })

        });

        request.catch(err => {
            alert(err.response.data);
            setDisabled(false);
            setTextButton("CONCLUIR COMPRA");
            setLoading(false);
        }
        );

    }
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
                            <h2>Olá, {user}!</h2>
                            <button onClick={logOut}>SAIR</button>
                        </div>
                    </div>
                </ContactInformation>
                <Summary>
                    <div className="titleInfo">Resumo da compra</div>
                    {cartProducts.map((product) => {
                        const count = productCount[product.id] || 1;
                        return (
                            <ProductContainer key={product.id}>
                                <Product>
                                    <img src={product.URL} alt={product.name} />
                                    <div className="productInfo">
                                        <h3>{product.name.toUpperCase()}</h3>
                                        <h4>{product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
                                    </div>
                                </Product>
                                <Quantity>
                                    <Counter>
                                        <div className="count">{count === 1 ? `${count} item` : `${count} itens`}</div>
                                    </Counter>
                                </Quantity>
                                <ProductTotal>
                                    <h4>{`Total: ${(Number(product.value) * count).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}</h4>
                                </ProductTotal>
                            </ProductContainer>
                        )
                    })}
                    <Total>
                        {`TOTAL: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                    </Total>
                </Summary>
                <form onSubmit={checkout}>
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
                                <input required placeholder="Número do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                                <input required type="text" placeholder="Nome no cartão" value={nameOnCard} onChange={e => setNameOnCard(e.target.value)} />
                            </div>
                            <div>
                                <input required type="text" placeholder="Data de expiração (mm/aa)" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />
                                <input required placeholder="CVV" value={securityCode} onChange={e => setSecurityCode(e.target.value)} />
                            </div>
                        </div>
                    </Payment>
                    <CheckoutButton disabled={disabled} type="submit">
                        <div><ThreeDots
                            height="10"
                            width="80"
                            radius="9"
                            color="#ffffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={loading}
                        /></div>
                        {textButton}
                    </CheckoutButton>
                </form>
            </InformationsContainer>

        </CheckoutContainer>
    )
}

const Total = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
`

const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #D3D7D5;
    width: 70px;
    margin-bottom: 5px;
`

const Product = styled.div`
display:flex;
align-items: center;
width:60%;
.productInfo{
    padding-left: 25px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width:330px;
}
img{
    width:64px;
    height: 64px;
    object-fit: cover;

}

`
const Quantity = styled.div`
width:20%;
display:flex;
flex-direction: column;
align-items: flex-start;
.removeButton{
    width:50%;
    height: 15px;
    border:none;
    background-color: #ffffff;
    cursor:pointer;
    font-size:9px;
    text-decoration: underline;
    letter-spacing: 0.5px;
    color:#6A6A6A;
}
`
const ProductTotal = styled.div`
width:20%;
display:flex;
justify-content: flex-end;
`

const ProductContainer = styled.div`
display:flex;
align-items: center;
padding: 10px 0px;
width:100%;
h3{
        color: #1F2622;
        font-size: 12px;
        font-weight:500;
        letter-spacing: 2.4px;
        margin-bottom: 10px;
        margin-top:10px;

    }
    h4{
        color: #6A6A6A;
        font-size: 12px;
        font-weight:500;
        letter-spacing: 2.2px;
        margin-bottom: 10px;
    }
`

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
const Summary = styled.div`

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
form{
    display: flex;
    flex-direction: column;
}
`