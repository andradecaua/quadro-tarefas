import { database } from '../service/firebaseconfig'

export function AttItens(){
  database.ref('Incidentes').on('child_changed', () => {
    window.location.reload()
  })
}