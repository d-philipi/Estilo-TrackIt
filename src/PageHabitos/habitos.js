import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tarefa from './tarefa';
import { Aviso, Conteudo, Sidebar, Topo } from '../styleds/styled';
import MyContext from '../context/MyContext';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import CriarHabito from './criarhabito';
import axios from 'axios';


export default function Habitos({tarefas, setTarefas, tarefaInput, setTarefaInput, diasEscolhido, setDiasEscolhido, userToken, setUserToken}){
    
    const {usuario, porcentagem} = useContext(MyContext);
    const [aviso, setAviso] = useState("Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!");
    const [showHabito, setShowHabito] = useState(false)
    const [showTarefas, setShowTarefas] = useState(false);
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        requisicao.then(mostraTarefas);
        requisicao.catch((err) => console.log(err.response));
    },[])

    function mostraTarefas(resposta){
        setShowTarefas(!showTarefas);
        console.log(resposta.data);
        setTarefas(resposta.data);
        setAviso("");
    }

    function criarHabito(){
        setShowHabito(!showHabito);
        console.log("Quero criar!", typeof diasEscolhido, diasEscolhido);
    }

    return (
        <Conteudo>
            <Topo>
                <h1>TrackIt</h1>
                <img src={usuario.image} 
                alt='Foto do usuário'/>
            </Topo>
            <Titulo>
                <h1>Meus hábitos</h1>
                <div>
                    <h2 onClick={criarHabito}>+</h2>
                </div>
            </Titulo>
            {showTarefas && <Tarefa tarefas={tarefas}/>}
            {showHabito && <CriarHabito
            tarefas={tarefas} 
            setTarefas={setTarefas}
            tarefaInput={tarefaInput}
            setTarefaInput={setTarefaInput}
            diasEscolhido={diasEscolhido}
            setDiasEscolhido={setDiasEscolhido}
            showHabito={showHabito}
            setShowHabito={setShowHabito}
            userToken={userToken}
            setUserToken={setUserToken}
            setAviso={setAviso}
            />}
            <Aviso>{aviso}</Aviso>
            <Sidebar>
                <p>Hábitos</p>
                <Link to={"/hoje"}>
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

const Circulo = styled.div`
    width: 100px;
    margin-bottom: 60px;
`