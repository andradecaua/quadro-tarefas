import React from 'react';


import Gicon from '../assets/googleicon.svg'
import '../styles/login.scss'



import { useAuth } from '../hook/useAuth'



export function LoginUI() {

  const { user, signWithGoogle } = useAuth()
  

  async function handleLogin() {
    if (!user) {
      await signWithGoogle()
    }
    if (user) {
      window.location.href = '/home'
    }
  }

  return (
    <div className="login">
      <div>

        <div className="areabutton">
          <h2>Faça login para continuar</h2>
          <button className="loginButton" onClick={handleLogin}><img src={Gicon} alt="google icone" />Entre o Google</button>
        </div>
      </div>
    </div>
  );

}
