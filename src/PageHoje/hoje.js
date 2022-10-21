import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Tarefa from './tarefa';
import { Conteudo, Sidebar, Titulo, Topo } from '../styleds/styled';

export default function Hoje({tarefas, setTarefas}){
    
    return (
        <Conteudo>
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
        </Conteudo>
    )
}