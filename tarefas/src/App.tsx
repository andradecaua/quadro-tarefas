import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { PrivateRoute } from './componentes/Routes'

import { AddNewMassive } from './pages/AddNewMassiveItem'
import { ViewMassives } from './pages/ViewMassivesItems'
import { Home } from './pages/Home'
import { LoginUI } from './pages/LoginInterface'
import { HistoryMassive } from './pages/HistoryMassives'


export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact={true} component={LoginUI} />
          <PrivateRoute path="/home" exact={false} component={Home} />
          <PrivateRoute path="/add-tarefa" exact={false} component={AddNewMassive} />
          <PrivateRoute path="/ver-tarefas" exact={false} component={ViewMassives} />
          <PrivateRoute path="/historico-de-tarefas" exact={false} component={HistoryMassive} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}


