import React from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  return (
    <div className='container-2'>
      <div className='container-login'>
        <div className='wrap-login'>
          <form className='login-form'>
            <span className='title-login'>Entre com seu login</span>
            <span className='title-login'><FaBookOpen className='login-icon' /></span>

            <div className='wrap-input'>
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type= "text"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input 
              className={password !== "" ? 'has-val input' : 'input'} 
              type= "password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Passaword'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='txt-1'>Não possui conta?</span>
              <Link to='/cadastro'className='txt-2'>Criar conta</Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Login