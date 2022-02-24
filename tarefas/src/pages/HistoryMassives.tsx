import { database } from '../service/firebaseconfig'
import '../styles/index.scss'
import '../styles/historymassive.scss'
import { Header } from '../componentes/Header'


export function HistoryMassive() {
  return (
    <div id="mainarea">
      <Header />
      <h1>Histórico de Tarefas</h1>
      <select id="filter" onChange={() => {
        const filter = document.getElementsByTagName('select')[0]
        const db = database.ref('History').child(`${filter.value}`)
        const history = document.querySelector<Element>('div#history')
        if (history) {
          history.innerHTML = ""
        }
        db.on('child_added', (snapshot) => {

          var dataItems = {
            tarefa: snapshot.child('tarefa').val(),
            motivo: snapshot.child('motivo').val(),
            team: snapshot.child('team').val(),
            time: snapshot.child('time').val(),
            timePrev: snapshot.child('timePrev').val(),
            prio: snapshot.child('prio').val(),
            status: snapshot.child('stats').val(),
            date: snapshot.child('date').val(),
            solicitante: snapshot.child('solicitante').val(),
            text: snapshot.child('text').val(),
            user: snapshot.child('user').val(),
            key: String(snapshot.key),
          }
          if (history?.id === "history") {
            const key = dataItems.key.substring(1)
            if (filter.value === "") {
              history.innerHTML = ""
              return true
            }
            history.innerHTML +=
              `
              <div class="dataItems" id="${key}">
                <span class="incidenteText">${dataItems.tarefa}/ ${dataItems.prio} - ${dataItems.solicitante}</span>
                <ul>
                <li>${dataItems.motivo}</li>
                <li>Ocorrido as ${dataItems.time} e o tempo de previsão ${dataItems.timePrev}</li>
                <li>${dataItems.team} responsaveis pela tarefa</li>
                <li>Estado atual de encerramento por ${dataItems.user}</li>
                <li>Aberto em ${dataItems.date}</li>
                </ul>
                <p id="areatexto">${dataItems.text}</p>
              </div>
              `
          }
        })
      }}>
        <option></option>
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
      <div id="history" className="history-area">
      </div>
    </div>
  )
}
