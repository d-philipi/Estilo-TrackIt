import styled from 'styled-components';


//Componentes usados na página de Login e Cadastro <COMEÇO>
export const Container = styled.div`
    width: 100%;
    height: 667px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;    
`

export const Logo = styled.img`
    width: 180px;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    color: #DBDBDB;

    margin: 2.5px;
`

export const Botao = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;

    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    text-align: center;
    color: #FFFFFF;
`

export const Criar = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin:25px;
`
// <FINAL>

//Componentes usados na página de hoje, hábitos e histórico <COMEÇO>
export const Conteudo = styled.div`
    width: 100%;
    height: 800px;
    padding: 75px 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F2F2F2;
`

export const Topo = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top:0;
    left: 0;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1{
        font-family: 'Playball', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 40px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        left: 306px;
        top: 9px;
        border-radius: 98.5px;
    }
`

export const Titulo = styled.div`
    width: 100%;
    height: 100px;
    padding: 30px 0;
    h1{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 5px;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #BABABA;
    }
`

export const Sidebar = styled.div`
    width: 100%;
    height: 70px;
    position: absolute;    
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF;
    p{
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
    }
`

export const Aviso = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #666666;
`
// <FINAL>