import React from 'react'
import {  useState } from 'react';

export const Formulario = () =>{
const [ form, setForm ] = useState({
  nome: '',
  telefone: '',
  cpf: '',
  email:'',
  senha: '',
})
/*const [ cep, setCep ] = useState ('')
function handleChangeCep(){*/

/*if(cep !== null){
  useEffect(() =>{
    fetch('https://correios.contrateumdev.com.br/api/cep')
    .then((response) => response.json())
    .then((json) => setCep(json))
    console.log(setCep)
  },[cep])
 if(cep ===null){return window.alert('Insira seu cep')}
}}*/
 function handleChange(event){
  event.preventDefault()
  const {id , value} = event.target
  setForm({...form, [id]:value })
 }
 function handleSubmit(event){
  event.preventDefault()
 }
 return (
  <form onChange= { handleSubmit }>
    <label id='name'>Nome:</label>
    <input type='text' id='name' placeholder='Insira seu nome' value={form.nome} 
    onChange={(event)=> setForm({handleChange})}></input>
    <br></br>
    <label id='telefone'>Telefone</label>
    <input type='tel' placeholder='(00)0000-0000' value={form.telefone} 
    onChange={(event) => setForm({handleChange})}></input>
    <br></br>
    <label id='cpf'>CPF</label>
    <input type='text' placeholder='000.000.000-00' value={form.cpf} 
    onChange={(event)=>setForm({handleChange})}></input>
    <br></br>
    <label id='email'>E-mail</label>
    <input type='email' placeholder='aaa@aaa.com' value={form.email}
    onChange={(event)=> setForm({handleChange})}></input>
    <br></br>
    <label id='password'>Senha</label>
    <input type='password' placeholder='******' value={form.senha} 
    required onChange={(event)=>setForm({handleChange})}></input>
    <br></br>
  </form>
 )
}
