import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Dias ({indice, tarefas}){
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"];

    return(
        <ContainerDias>
            {semana.map((d,index) => (tarefas[indice].days.includes(index)) ?
            <DiaEscolhido key={index} id={index}>
                {d}
            </DiaEscolhido>
            :
            <Dia key={index} id={index}>
                {d}
            </Dia>)
            }
        </ContainerDias>
    )
}

const ContainerDias = styled.ul`
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