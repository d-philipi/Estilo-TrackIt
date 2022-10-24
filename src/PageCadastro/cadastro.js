import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { Container, Logo, Form, Input, Botao, Criar } from '../styleds/styled';

export default function Cadastro({email, setEmail, senha, setSenha, nome, setNome, foto, setFoto}){

    const navigate = useNavigate();

    function cadastrar(e){
        e.preventDefault();

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",{
            email: email,
	        name: nome,
	        image: foto,
	        password: senha
        })
        requisicao.then(cadastroSucesso)
        requisicao.catch(cadastroFalha)
    };

    function cadastroSucesso(response){
        navigate("/");
        console.log("Cadastrado!", response);
        setEmail("");
        setNome("");
        setFoto("");
        setSenha("");
    }

    function cadastroFalha (response){
        alert("Falha no cadastro");
        console.log(response.response);
        setEmail("");
        setNome("");
        setFoto("");
        setSenha("");
    }

    return (
        <Container>
            <Logo src='./img/LogoLogin.png' alt='Logo do site'/>
            <Form onSubmit={cadastrar}>
                <Input type="email" placeholder='Digite seu email...' required value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder='Digite sua senha...' required value={senha} onChange={e => setSenha(e.target.value)}/>
                <Input type="text" placeholder='Digite seu nome...' required value={nome} onChange={e => setNome(e.target.value)}/>
                <Input type="text" placeholder='Deixe o link da sua foto...' required value={foto} onChange={e => setFoto(e.target.value)}/>
                <Botao type="submit" >Entrar</Botao>
            </Form>
            <Link to={"/"}>
                <Criar>Já tem uma conta? Faça login!</Criar>
            </Link>
        </Container>
    );
};