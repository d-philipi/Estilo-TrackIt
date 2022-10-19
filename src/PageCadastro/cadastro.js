import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import { Container, Logo, Form, Input, Botao, Criar } from '../styleds/styled';

export default function Cadastro({email, setEmail, senha, setSenha, nome, setNome, foto, setFoto}){

    function cadastrar(){
        console.log("Cadastrado!");
    };

    return (
        <Container>
            <Logo src='./img/LogoLogin.png' alt='Logo do site'/>
            <Form onSubmit={cadastrar}>
                <Input type="email" placeholder='Digite seu email...' value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder='Digite sua senha...' value={senha} onChange={e => setSenha(e.target.value)}/>
                <Input type="text" placeholder='Digite seu nome...' value={nome} onChange={e => setNome(e.target.value)}/>
                <Input type="text" placeholder='Deixe o link da sua foto...' value={foto} onChange={e => setFoto(e.target.value)}/>
                <Botao type="submit" >Entrar</Botao>
            </Form>
            <Link to={"/"}>
                <Criar>Já tem uma conta? Faça login!</Criar>
            </Link>
        </Container>
    );
};