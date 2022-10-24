import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function CriarHabito({tarefas, setTarefas, tarefaInput, setTarefaInput, diasEscolhido, setDiasEscolhido, showHabito, setShowHabito, userToken, setUserToken, setAviso}){

    const semana = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [dias, setDias] = useState(
        <Dias>
            {semana.map((d,index) => 
            <Dia key={index} id={index} onClick={marcar}>
                {d}
            </Dia>)
            }
        </Dias>
    )

    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }

    function salvarSucesso(resposta){
        alert("Hábito salvo com sucesso");
        console.log("Criei um hábito",resposta);
    }

    function salvarFalha(err){
        console.log("Falhou",err.response)
    }

    function cancelar(e){
        e.preventDefault();
        setShowHabito(!showHabito);
        console.log("Cancelei");
    }

    function marcar(e) {
        e.preventDefault();
        const novodia = Number(e.target.id);
        setDiasEscolhido(diasEscolhido.push(novodia));
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

    function salvar(e){
        e.preventDefault();
        console.log(diasEscolhido);

        const novatarefa={
            name: tarefaInput,
            days: [diasEscolhido]
        }

        setTarefas(tarefas.push(novatarefa));

        const requisicao = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",novatarefa, config);

        setTarefaInput("");
        setDiasEscolhido([]);
        setShowHabito(!showHabito);
    
        requisicao.then(salvarSucesso);
        requisicao.catch(salvarFalha);

    }

    return(
        <TarefaAberta onSubmit={salvar} >
            <TextTarefa type="text" placeholder="Digite o nome do hábito..." value={tarefaInput} onChange={e => setTarefaInput(e.target.value)}/>
            {dias}
            <Decisao>
                <Cancelar onClick={cancelar}>Cancelar</Cancelar>
                <Salvar type="submit">Salvar</Salvar>
            </Decisao>
        </TarefaAberta>
    )
}

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

const Salvar = styled.button`
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