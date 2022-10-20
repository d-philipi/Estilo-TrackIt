import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Cadastro from './PageCadastro/cadastro';
import Habitos from './PageHabitos/habitos';
import Historico from './PageHistorico/historico';
import Hoje from './PageHoje/hoje';
import Login from './PageLogin/login';


export default function App() {
  const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
	const [foto, setFoto] = useState("");

  return (
    <BrowserRouter>
			<Routes>
        <Route 
        path="/" 
        element={<Login 
        email={email} 
        setEmail={setEmail} 
        senha={senha} 
        setSenha={setSenha}
        />} />
				<Route 
        path="/cadastro" 
        element={<Cadastro
        email={email} 
        setEmail={setEmail} 
        senha={senha} 
        setSenha={setSenha}
        nome={nome}
        setNome={setNome}
        foto={foto}
        setFoto={setFoto}
        />} />
        <Route path='/hoje' element={<Hoje/>}/>
        <Route path="/habitos" element={<Habitos/>} />
        <Route path='/historico' element={<Historico/>}/>
			</Routes>
		</BrowserRouter>
  );
}
