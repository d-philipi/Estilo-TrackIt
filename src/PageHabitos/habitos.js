import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import Tarefa from './tarefa';
import { Aviso, Conteudo, Sidebar, Topo } from '../styleds/styled';



export default function Habitos({tarefas, setTarefas}){

    const [aviso, setAviso] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!");
    
    function criarHabito(){
        console.log("Quero criar!")
    }

    return (
        <Conteudo>
            <Topo>
                <h1>TrackIt</h1>
                <img src='https://img.olhardigital.com.br/wp-content/uploads/2021/03/Bob-Esponja-1024x576.jpg' 
                alt='Foto do usuário'/>
            </Topo>
            <Titulo>
                <h1>Meus hábitos</h1>
                <div>
                    <h2 onClick={criarHabito}>+</h2>
                </div>
            </Titulo>
            {tarefas && tarefas.map((t, index) => <Tarefa key={index} tarefas={t}/>)}
            <Aviso>{aviso}</Aviso>
            <Sidebar>
                <p>Hábitos</p>
                <Link to={"/hoje"}>
                    <p>Hoje</p>
                </Link>
                <Link to={"/historico"}>
                    <p>Historico</p>
                </Link>
            </Sidebar>
        </Conteudo>
    )
}

const Titulo = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
    div{
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        cursor:pointer;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 27px;
        text-align: center;
        color: #FFFFFF;
    }

`
