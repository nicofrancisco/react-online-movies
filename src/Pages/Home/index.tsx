import React from 'react'
import { useSelector } from 'react-redux'
import get from 'lodash/get'

import { RootState } from '../../API/rootReducer'

import Header from '../../Components/Header'
import TopRated from '../../Components/TopRated'

import { HomeWrapper } from './styles'

interface AppProps {}
const App: React.FC<AppProps> = () => {
  const { images } = useSelector((state: RootState) => state.configSlice)
  const imageBaseUrl = get(images, 'images.secure_base_url', '')

  return (
    <HomeWrapper>
      <Header />
      <TopRated imageBaseUrl={imageBaseUrl} />
    </HomeWrapper>
  )
}

export default App
