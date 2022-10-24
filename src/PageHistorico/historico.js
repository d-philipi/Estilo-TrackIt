import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { Conteudo, Sidebar, Titulo, Topo } from '../styleds/styled';
import MyContext from '../context/MyContext';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";

export default function Historico(){

    const {usuario, porcentagem} = useContext(MyContext);

    return (
        <Conteudo>
        <Topo>
            <h1>TrackIt</h1>
            <img src={usuario.image} 
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
            <p>Historico</p>
        </Sidebar>
    </Conteudo>
    )
}

const Circulo = styled.div`
    width: 100px;
    margin-bottom: 60px;
`