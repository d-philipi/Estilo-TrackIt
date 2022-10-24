import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { Container, Logo, Form, Input, Botao, Criar } from '../styleds/styled';
import MyContext from '../context/MyContext';

export default function Login({email, setEmail, senha, setSenha, userToken, setUserToken}){

    const {setUsuario} = useContext(MyContext);
    const navigate = useNavigate();

    function fazerLogin(e){
        e.preventDefault();

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
            email: email,
	        password: senha
        })
        requisicao.then(loginSucesso)
        requisicao.catch(loginFalha)
    };

    function loginSucesso(resposta){
        setUsuario(resposta.data);
        setUserToken(resposta.data.token)
        navigate("/hoje");
        setEmail("");
        setSenha("");
    }

    function loginFalha(resposta){
        alert("Falha no login!");
        console.log(resposta.response);
    }

    return (
        <Container>
            <Logo src='./img/LogoLogin.png' alt='Logo do site'/>
            <Form onSubmit={fazerLogin}>
                <Input type="email" placeholder='Digite seu email...' value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder='Digite sua senha...' value={senha} onChange={e => setSenha(e.target.value)}/>
                <Botao type="submit" >Entrar</Botao>
            </Form>
            <Link to={"/cadastro"}>
                <Criar>Não tem uma conta? Cadastre-se!</Criar>
            </Link>
        </Container>
    )
}