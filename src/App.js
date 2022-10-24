import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import axios from 'axios';
import Cadastro from './PageCadastro/cadastro';
import Habitos from './PageHabitos/habitos';
import Historico from './PageHistorico/historico';
import Hoje from './PageHoje/hoje';
import Login from './PageLogin/login';
import MyContext from './context/MyContext';


export default function App() {

  const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
	const [foto, setFoto] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [tarefaInput, setTarefaInput] = useState("");
  const [diasEscolhido, setDiasEscolhido] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [tarefaAberta, setTarefaAberta] = useState(null);
  const [userToken, setUserToken] = useState("");
  const [porcentagem, setPorcentagem] = useState(0);

  return (
    <BrowserRouter>
      <MyContext.Provider value={{usuario, setUsuario, porcentagem, setPorcentagem}}>
        <Routes>
          <Route 
          path="/" 
          element={<Login 
          email={email} 
          setEmail={setEmail} 
          senha={senha} 
          setSenha={setSenha}
          userToken={userToken}
          setUserToken={setUserToken}
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
          <Route 
          path='/hoje' 
          element={<Hoje 
          tarefas={tarefas} 
          setTarefas={setTarefas}
          userToken={userToken}
          setUserToken={setUserToken}
          />}/>
          <Route 
          path="/habitos" 
          element={<Habitos 
          tarefas={tarefas} 
          setTarefas={setTarefas}
          tarefaInput={tarefaInput}
          setTarefaInput={setTarefaInput}
          diasEscolhido={diasEscolhido}
          setDiasEscolhido={setDiasEscolhido}
          tarefaAberta={tarefaAberta}
          setTarefaAberta={setTarefaAberta}
          userToken={userToken}
          setUserToken={setUserToken}
          />} />
          <Route 
          path='/historico' 
          element={<Historico 
          />}/>
        </Routes>
      </MyContext.Provider>
		</BrowserRouter>
  );
}
