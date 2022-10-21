import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Conteudo, Sidebar, Titulo, Topo } from '../styleds/styled';

export default function Historico(){

    return (
        <Conteudo>
        <Topo>
            <h1>TrackIt</h1>
            <img src='https://img.olhardigital.com.br/wp-content/uploads/2021/03/Bob-Esponja-1024x576.jpg' 
            alt='Foto do usuário'/>
        </Topo>
        <Titulo>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </Titulo>
        <Sidebar>
            <Link to={"/habitos"}>
                <p>Hábitos</p>
            </Link>
            <Link to={"/hoje"}>
                <p>Hoje</p>
            </Link>
            <p>Historico</p>
        </Sidebar>
    </Conteudo>
    )
}