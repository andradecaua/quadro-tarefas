import { Route } from 'react-router-dom'



type RouteProps = {
  path: string,
  exact: boolean,
  component?: React.ComponentType;
}

export const PrivateRoute = (props: RouteProps) => {
  
  if (sessionStorage.key(0) === `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`) {
  }
  else {
    window.location.href = '/'
  }

  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  )
}
