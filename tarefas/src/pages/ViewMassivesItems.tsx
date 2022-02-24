import '../styles/viewmassive.scss'
import '../styles/index.scss'

import { ShowItens } from '../hook/ShowItens'
import {MoveItens} from '../hook/MoveItens'
import { AttItens } from '../hook/AttItens'

import { ListArea } from '../componentes/ListArea'
import {Header} from '../componentes/Header'


export function ViewMassives() {        
    ShowItens()
    MoveItens()
    AttItens()
  return (
    <div id="main">
      <Header />
      <div id="view-area">
        <ListArea />
      </div>
    </div>
  )
}