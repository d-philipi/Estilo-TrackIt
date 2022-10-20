import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';
import Tarefa from './tarefa';

export default function Hoje(){
    return (
        <Container>
            <Topo>
                <h1>TrackIt</h1>
                <img src='https://img.olhardigital.com.br/wp-content/uploads/2021/03/Bob-Esponja-1024x576.jpg' 
                alt='Foto do usuário'/>
            </Topo>
            <Titulo>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Titulo>
            <Tarefa/>
            <Sidebar>
                <Link to={"/habitos"}>
                    <p>Hábitos</p>
                </Link>
                <p>Hoje</p>
                <Link to={"/historico"}>
                    <p>Historico</p>
                </Link>
            </Sidebar>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 667px;
    padding: 70px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
`

const Topo = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;
    top:0;
    left: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        left: 306px;
        top: 9px;
        border-radius: 98.5px;
    }
`

const Titulo = styled.div`
    width: 100%;
    height: 100px;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #BABABA;
    }
`

const Sidebar = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;    
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
    }
`