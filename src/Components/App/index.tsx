import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Logo from '../../Components/Logo'
import Initial from '../../Pages/Home'
import Movie from '../../Pages/Movie'
import { Route, BrowserRouter } from 'react-router-dom'

import { getConfiguration } from '../../API/slices'
import { AppContainer } from './styles'

interface AppProps {}
const App: React.FC<AppProps> = (props) => {
  const dispatch = useCallback(useDispatch(), [])
  useEffect(() => {
    dispatch(getConfiguration())
  }, [dispatch])

  return (
    <AppContainer>
      <BrowserRouter>
         <Logo />
          <Route exact={true} path="/" component={Initial} />
          <Route
            path="/movie/:id"
            render={(props) => <Movie {...props} key={props.match.params.id} />}
          />
      </BrowserRouter>
    </AppContainer>
  )
}
export default React.memo(App)
