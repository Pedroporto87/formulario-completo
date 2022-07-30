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
const [ cep, setCep ] = useState('')

function handleCep(cep){
    fetch(`https://ws.apicep.com/cep/${cep}.json`)
    .then((response) => response.json())
    .then((data) => {
      setCep(data)
    })    
}
function handleChange(event){
  event.preventDefault()
  const {id , value} = event.target
  setForm({...form, [id]:value })
}
 
 function handleSubmit(event){
  event.preventDefault()
 }
 
 return (
  <form onSubmit={handleSubmit}>
    <label id='name'>Nome:</label>
    <input type='text' id='name' placeholder='Insira seu nome' value={form.nome} 
    onChange={()=> setForm({handleChange})} />
    <br />
    <label id='telefone'>Telefone</label>
    <input type='tel' placeholder='(00)0000-0000' value={form.telefone} 
    onChange={() => setForm({handleChange})} />
    <br />
    <label id='cpf'>CPF</label>
    <input type='text' placeholder='000.000.000-00' value={form.cpf} 
    onChange={()=>setForm({handleChange})} />
    <br />
    <label id='email'>E-mail</label>
    <input type='email' placeholder='aaa@aaa.com' value={form.email}
    onChange={()=> setForm({handleChange})} />
    <br />
    <label id='password'>Senha</label>
    <input type='password' placeholder='******' value={form.senha} 
    required onChange={()=>setForm({handleChange})} />
    <br />
    <label id='cep'>Cep</label>
    <input type='text' placeholder='Insira seu cep' value={cep.value} required 
    onChange={(event) => handleCep(event.target.value)} />
    <br />
    <label id='rua'>Rua</label>
    <input type='text' value={cep.address} />
    <br />
    <label id='cidade'>Cidade</label>
    <input type='text' value={cep.city} />
    <br />
    <label id='bairro'>Bairro</label>
    <input type='text' value={cep.district} />
    <br />
  </form>
  )
}
