import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styled from 'styled-components';

export default function Tarefa({tarefas, exemplo, porcentagem, setPorcentagem}){
    const tarefasConcluidas = [];

    const [cor, setCor] = useState(false)

    function marcar(t){
        tarefasConcluidas.push(t);
        const novaPorcentagem = (tarefasConcluidas.length/exemplo.length)*100;
        setPorcentagem(novaPorcentagem);
    }
    
    function desmarcar(t){

    }

    return(
        <TarefaContainer>
            {exemplo.map((t, index) => 
            <TarefaFechada key={index}> 
                <Titulo>
                    <h1>{t.name}</h1>
                    <p>
                        Sequência atual: {t.currentSequence} 
                        <br/> 
                        Seu recorde:{t.highestSequence}
                    </p>
                </Titulo>
                {tarefasConcluidas.includes(t) ?
                 <ion-icon cor={true} name="checkbox" onClick={() => desmarcar(t)}></ion-icon>
                 : 
                 <ion-icon cor={false} name="checkbox" onClick={() => marcar(t)}></ion-icon>
                 }
            </TarefaFechada>)}
        </TarefaContainer>
    )
}

const TarefaContainer = styled.ul`
    height: 527px;
`

const Titulo = styled.div`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 5px;

    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        margin: 10px 0;
    }
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        margin-top: 15px;
        color: #666666;
    }
`

const TarefaFechada = styled.li`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    ion-icon{
        width: 69px;
        height: 69px;
        color: ${props => props.cor ? "#8FC549" : "#EBEBEB"};
        border-radius: 5px;
        cursor:pointer;
    }
`