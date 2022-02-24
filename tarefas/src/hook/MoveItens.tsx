import { database } from '../service/firebaseconfig'


export function MoveItens() {
  const db = database.ref('Tarefas')

  db.on('child_removed', (snapshot) => {
    if (snapshot.key) {
      const key = snapshot.key.substring(1)
      const area = document.querySelector(`div#${key}`)
      if (area) {
        area.remove()
      }
    }
  })
}
