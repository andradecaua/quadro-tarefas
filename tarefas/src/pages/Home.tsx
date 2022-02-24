import '../styles/home.scss'
import '../styles/index.scss'

export function Home() {



  return (
    <div id="home">
      <div id="titulo">Home de Tarefas</div>
      <div id="routeDiv">
        <div id="divRoute" onClick={() => { window.location.href = "/add-tarefa" }} className="routeItens">Adicionar Tarefas</div>
        <a href="/ver-tarefas" className="routeItens">Visualizar Tarefas</a>
        <a href="/historico-de-tarefas" className="routeItens">Histórico de Tarefas</a>
      </div>
    </div>
  )
}
