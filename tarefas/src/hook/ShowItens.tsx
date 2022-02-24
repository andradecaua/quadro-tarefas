import { database, auth } from '../service/firebaseconfig'



export function ShowItens() {
  const db = database.ref('Tarefas')


  var dataItems = {
    tarefa: '',
    solicitante: '',
    team: '',
    time: '',
    timePrev: '',
    prio: '',
    status: '',
    key: '',
    date: '',
    motivo: '',
    text: '',
  }

  db.on('child_added', (snapshot) => {
    const lista = document.querySelector<Element>('div#list-area')
    dataItems = {
      tarefa: snapshot.child('tarefa').val(),
      solicitante: snapshot.child('solicitante').val(),
      team: snapshot.child('team').val(),
      time: snapshot.child('time').val(),
      timePrev: snapshot.child('timePrev').val(),
      prio: snapshot.child('prio').val(),
      status: snapshot.child('stats').val(),
      date: snapshot.child('date').val(),
      key: String(snapshot.key),
      motivo: snapshot.child('motivo').val(),
      text: snapshot.child('text').val(),
    }
    const keys = dataItems.key.substring(1)
    if (lista?.id === "list-area") {
      lista.innerHTML += `
      <div class="dataItems" id="${keys}">
      <span class="incidenteText">${dataItems.tarefa} / ${dataItems.solicitante}</span>
        <ul>
        <li>${dataItems.motivo}</li>
        <li>Ocorrido as ${dataItems.time} e o tempo de previsão ${dataItems.timePrev}</li>
        <li>${dataItems.team} responsaveis pela tarefa</li>
        <li>Abertura no dia ${dataItems.date}</li>
        </ul>
      <textarea  id="${keys}" class="areatexto" >${dataItems.text}</textarea>
      <select class="status"  id="${keys}">
        <option>${dataItems.status}</option>
        <option value="Tarefa Iniciada">Tarefa Iniciada</option>
        <option value="Tarefa em Andamento">Tarefa em Andamento</option>
        <option value="Tarefa em revisão">Tarefa em revisão</option>
        <option value="Encerramento">Encerramento</option>
      </select>
      </div> `
    }
  })
  db.once('child_added', (snapshot) => {
    const lista = document.querySelector<Element>('div#list-area')
    dataItems = {
      tarefa: snapshot.child('tarefa').val(),
      motivo: snapshot.child('motivo').val(),
      team: snapshot.child('team').val(),
      time: snapshot.child('time').val(),
      timePrev: snapshot.child('timePrev').val(),
      prio: snapshot.child('prio').val(),
      status: snapshot.child('stats').val(),
      date: snapshot.child('date').val(),
      solicitante: snapshot.child('solicitante').val(),
      key: String(snapshot.key),
      text: snapshot.child('text').val()
    }
    if (lista) {
      const child = document.querySelector(`select#${dataItems.key.substring(1)}`)
      const txt = document.querySelector(`textarea#${dataItems.key.substring(1)}`)
      txt?.addEventListener('click', () => {
        const texto = txt.parentElement?.getElementsByTagName('textarea')[0]
        texto?.addEventListener('change', () => {
          database.ref('Tarefas').child(`-${texto.id}`).update({
            text: texto.value
          }).finally(() => {
            return window.location.href = '/ver-tarefas'
          })
        })

      })
      child?.addEventListener('change', () => {
        const key = child.id
        const select = child.parentElement?.getElementsByTagName('select')[0]

        function verificarEstado() {
          if (select?.value !== "Encerramento") {
            db.child(`-${key}`).update({
              stats: select?.value
            })
          }
          else {
            db.child(`-${key}`).get().then((datadados) => {
              const dados = {
                tarefa: snapshot.child('tarefa').val(),
                motivo: snapshot.child('motivo').val(),
                team: snapshot.child('team').val(),
                time: snapshot.child('time').val(),
                timePrev: snapshot.child('timePrev').val(),
                prio: snapshot.child('prio').val(),
                status: snapshot.child('stats').val(),
                date: snapshot.child('date').val(),
                solicitante: snapshot.child('solicitante').val(),
                key: String(snapshot.key),
                text: snapshot.child('text').val(),
                usuarioCriador: datadados.child("usuarioCriador").val(),
                user: auth.currentUser?.displayName,
              }
              database.ref('History').child(dados.prio).push().set(dados)
            }).finally(() => {
              db.child(`-${key}`).remove()
            })
          }
          return window.location.href = '/ver-tarefas'
        }
        verificarEstado()
      })
    }
  })
}
