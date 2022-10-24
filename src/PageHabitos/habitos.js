import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

import Tarefa from './tarefa';
import { Aviso, Conteudo, Sidebar, Topo } from '../styleds/styled';


export default function Habitos({tarefas, setTarefas, tarefaInput, setTarefaInput, diasEscolhido, setDiasEscolhido}){
    

    const semana = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [dias, setDias] = useState(
        <Dias>
            {semana.map((d,index) => 
            <DiaEscolhido key={index} id={index} onClick={marcar}>
                {d}
            </DiaEscolhido>)
            }
        </Dias>
    )

    const [aviso, setAviso] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!");
    const [tarefaAberta, setTarefaAberta] = useState(null);

    function salvar(e){
        e.preventDefault();
        console.log("Salvei");
    }

    function cancelar(e){
        e.preventDefault();
        console.log("Cancelei");
    }

    function marcar(e) {
        e.preventDefault();
        setDiasEscolhido(diasEscolhido.push(e.target.id));
        setDias(
            <Dias>
                {semana.map((d,index) => (diasEscolhido.includes(index)) ?
                <DiaEscolhido key={index} id={index} onClick={desmarcar}>
                    {d}
                </DiaEscolhido>
                :
                <Dia key={index} id={index} onClick={marcar}>
                    {d}
                </Dia>)
                }
            </Dias>
        )
        console.log(diasEscolhido);
    }

    function desmarcar(e) {
        e.preventDefault();
    }

    function criarHabito(e){
        setTarefaAberta(
            <TarefaAberta>
                <TextTarefa type="text" placeholder="Digite o nome do hábito..." value={tarefaInput} onChange={e => setTarefaInput(e.target.value)}/>
                {dias}
                <Decisao>
                    <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                    <Salvar onClick={salvar}>Salvar</Salvar>
                </Decisao>
            </TarefaAberta>
        )
        console.log("Quero criar!");
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
            {tarefaAberta}
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

const TarefaAberta = styled.form`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    padding: 15px;
    margin-bottom: 10px;
`

const TextTarefa = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 10px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
`

const Dias = styled.ul`
    width: 240px;
    height: 30px;
    display: flex;
`

const Dia = styled.li`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    cursor: pointer;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #DBDBDB;
`

const DiaEscolhido = styled.li`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52B6FF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 4px;
    cursor: pointer;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
`

const Decisao = styled.div`
    width: 303px;
    height: 65px;
    display: flex;
    justify-content: end;
    align-items: center;
    position: absolute;
    right: 15px;
    bottom: 0px;
`

const Cancelar = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-right: 15px;
    color: #52B6FF;
    cursor: pointer;
`

const Salvar = styled.span`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
`