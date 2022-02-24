import '../styles/header.scss'
//import LogoAcesse from '../assets/acesselgo.svg'
import logout from '../assets/logout.svg'

import { auth } from '../service/firebaseconfig'

export function Header() {


  return (
    <header className="cabecalho">
      <div className="rotaitems">
        <div onClick={() => { window.location.href = "/add-tarefa" }} id="divRoute" className="routeItens">Adicionar Tarefas</div>
        <a href="/ver-tarefas" className="routeItens">Visualizar Tarefas</a>
        <a href="/historico-de-tarefas" className="routeItens">Histórico de Tarefas</a>
        <button onClick={() => {
          auth.signOut()
          window.location.href = "/"
        }}><img src={logout} alt="Sair do sistema" /></button>
      </div>
    </header>
  )
}
