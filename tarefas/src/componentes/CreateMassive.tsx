import { database, auth } from '../service/firebaseconfig'

var props = {
  tarefa: "",
  prio: "",
  motivo: "",
  time: "",
  timePrev: "",
  team: "",
  stats: "",
  date: "",
  solicitante: "",
  text: "",
  usuario: "a",
}



export async function createMassive() {

  const user = auth.currentUser
  props.usuario = `${user ? user.displayName : "a"}`



  const data = Date()
  const timeNow = data.split(' ')
  const hora = `${timeNow[2]}/${timeNow[1]}/${timeNow[3]} as ${timeNow[4]}`


  const arry = ['', '', '', '', '', '', '']
  const mainDb = database.ref('Tarefas').push()
  const selects = document.getElementsByTagName('select')[0]
  const textar = document.getElementsByTagName('textarea')[0]
  for (var n = 0; n <= 6; n++) {
    const inputs = document.getElementsByTagName('input')[n]
    if (inputs.value) {
      arry[n] = inputs.value.toUpperCase()
    }
    props.tarefa = arry[0]
    props.prio = arry[1]
    props.solicitante = arry[2]
    props.motivo = arry[3]
    props.time = arry[4]
    props.timePrev = arry[5]
    props.team = arry[6]
  }
  arry.push(selects.value)
  arry.push(textar.value)
  arry.push(hora)
  props.stats = arry[7]
  props.text = arry[8]
  props.date = arry[9]

  mainDb.set({
    tarefa: props.tarefa,
    prio: props.prio,
    motivo: props.motivo,
    time: props.time,
    timePrev: props.timePrev,
    team: props.team,
    stats: props.stats,
    date: props.date,
    solicitante: props.solicitante,
    text: props.text,
    usuarioCriador: props.usuario
  }).then(() => {
    return window.location.href = '/ver-tarefas'
  })

}


