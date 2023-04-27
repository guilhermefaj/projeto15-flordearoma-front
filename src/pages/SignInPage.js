import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import api from "../axios";
import { ThreeDots } from "react-loader-spinner";


export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [textButton, setTextButton] = useState("LOGIN");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    function signIn(e) {
        e.preventDefault();
        setDisabled(true);
        setTextButton("");
        setLoading(true);

        const obj = {
            email,
            password
        }

        const request = api.post("/sign-in", obj);

        request.then(response => {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", response.data.userName);
            navigate("/");
        });

        request.catch(err => {
            alert(err.response.data);
            setDisabled(false);
            setTextButton("LOGIN");
            setLoading(false);
        }
        );
    }

    return (
        <ContainerLogin>
            <Title>
                <h1>LOGIN</h1><br />
                <h2>Entre com seu e-mail e senha:</h2>
            </Title>
            <FormLogin disabled={disabled} onSubmit={signIn}>
                <input disabled={disabled} required type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input disabled={disabled} required type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                <button disabled={disabled} type="submit">
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
                </button>
            </FormLogin>
            <Link to="/sign-up" >
                Não tem uma conta? <span>Cadastre-se!</span>
            </Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f3f6f4;
    margin-top:160px;
    margin-right: auto;
    margin-left: auto;
    height: 100vh;
    a{
        color:#6A6A6A;
        font-family: "DM Sans", sans-serif;
        font-size:14px;
        font-weight:400;
        line-height:23px;
        align-self: center
    }
    span{
        font-weight: 700;
        color:#1F2622;
    }
`

const Title = styled.div`
    margin-top:calc(40vh - 160px);
    text-align: center;
    margin-bottom: 28px;
    color:#1F2622;
    font-family: "DM Sans", sans-serif;
    h1{
        font-size:20px;
        font-weight:500;
        letter-spacing: 4px;
    }
    h2{
        font-size:14x;
        font-weight:400;
    }
`
const FormLogin = styled.form`
    width: 398px;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
        width: 100%;
        height: 45px;
        background-color: #4F8165;
        color: #FFFFFF;
        font-family: "DM Sans", sans-serif;
        font-size:12px;
        font-weight:500;
        line-height:15px;
        letter-spacing: 2.4px;
        border: none;
        border-radius: 3px;
        margin-bottom: 25px;
        cursor:pointer;
        opacity: ${({ disabled }) => disabled === true ? "70%" : "100%"}
    }
    input {
        background-color: #f3f6f4;
        margin-bottom: 12px;
        width: 100%;
        height: 45px;
        border: solid 0.2px #D4D4D4;
        border-radius: 3px;
        padding: 0 11px;
        &::placeholder{
        color:#6A6A6A;
        font-family: "DM Sans", sans-serif;
        font-size:14px;
        font-weight:400;
        line-height:20px;
        }
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

