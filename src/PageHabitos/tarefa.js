import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Dias from './dias';

export default function Tarefa({tarefas}){

    console.log(tarefas)
    return(
        <TarefaContainer>
            {tarefas.map((t, index) => 
            <TarefaFechada key={index}> 
                <Titulo>
                    {t.name}
                    <ion-icon name="trash-outline"></ion-icon>
                </Titulo>
                <Dias 
                indice={index} 
                tarefas={tarefas}
                />
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
    margin-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #666666;
`

const TarefaFechada = styled.li`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 10px;
`
