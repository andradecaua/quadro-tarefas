import '../styles/addmassive.scss'
import { createMassive } from '../componentes/CreateMassive'
import { Header } from '../componentes/Header'


export function AddNewMassive() {

  return (
    <main id="addarea">
      <Header />
      <h2>Preencher formulário para adicionar tarefas</h2>
      <form className='formAddMassive'>
        <input type="text" placeholder="Tarefa" maxLength={12} />
        <input type="number" placeholder="Prioridade" min={0} max={2} maxLength={1} />
        <input type="text" placeholder="Solicitante" />
        <input type="text" placeholder="Motivo" />
        <input type="text" placeholder="Horario de Inicio" />
        <input type="text" placeholder="Tempo de previsão" />
        <input type="text" placeholder="Equipe responsavél pela tarefa" />
        <textarea maxLength={114} />
        <select className="statusItems">
          <option value="Abertura">Iniciada</option>
          <option value="Equipe deslocada">Tarefa em Andamento</option>
          <option value="Equipe na região">Tarefa em Revisão </option>
        </select>
        <button type="button" id="createButton" onClick={createMassive} className="addButton">Adicionar</button>
      </form>
    </main>
  )
}
