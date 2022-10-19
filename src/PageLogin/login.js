import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { Container, Logo, Form, Input, Botao, Criar } from '../styleds/styled';

export default function Login({email, setEmail, senha, setSenha}){

    function fazerLogin(){
        console.log("Fiz login!");
    };

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