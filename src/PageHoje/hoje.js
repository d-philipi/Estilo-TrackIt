import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Tarefa from './tarefa';
import { Conteudo, Sidebar, Titulo, Topo } from '../styleds/styled';
import MyContext from '../context/MyContext';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

export default function Hoje({tarefas, setTarefas, userToken, setUserToken}){

    const [progressao, setprogressao] = useState("Nenhum hábito concluído ainda");
    const {usuario, porcentagem, setPorcentagem} = useContext(MyContext);
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }

    const exemplo= [
        {
            id: 3,
            name: "Acordar",
            done: true,
            currentSequence: 1,
            highestSequence: 1
        },{
            id: 4,
            name: "Dormir",
            done: false,
            currentSequence: 2,
            highestSequence: 2
        }
    ]

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        requisicao.then(mostraTarefas);
        requisicao.catch((err) => console.log(err.response));
    },[])

    function mostraTarefas(resposta){
        console.log(resposta);
        setTarefas(resposta.data);
    }

    return (
        <Conteudo>
            <Topo>
                <h1>TrackIt</h1>
                <img src={usuario.image} 
                alt='Foto do usuário'/>
            </Topo>
            <Titulo>
                <h1>Segunda, 17/05</h1>
                <h2>Nenhum hábito concluído ainda</h2>
            </Titulo>
            <Tarefa 
            tarefas={tarefas} 
            exemplo={exemplo} 
            porcentagem={porcentagem}
            setPorcentagem={setPorcentagem}
            />
            <Sidebar>
                <Link to={"/habitos"}>
                    <p>Hábitos</p>
                </Link>
                    <Circulo>
                        <CircularProgressbarWithChildren
                            value={porcentagem}
                            strokeWidth={10}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#3e98c7",
                                textSize: "18px",
                                pathColor: "#fff",
                                trailColor: "transparent"
                            })}
                        >
                            <div style={{ 
                                fontSize: 18,
                                paddingBottom: 10, 
                                color: 'white',
                                fontFamily: 'Lexend Deca',
                                }}>
                                <strong>Hoje</strong>
                            </div>
                        </CircularProgressbarWithChildren>
                    </Circulo>
                <Link to={"/historico"}>
                    <p>Historico</p>
                </Link>
            </Sidebar>
        </Conteudo>
    )
}

const Circulo = styled.div`
    width: 100px;
    margin-bottom: 60px;
`