import React from 'react'

import { Toolbar, SearchWrapper } from './styles'
import HomeSearch from '../Search'

interface AppProps {}
const Header: React.FC<AppProps> = () => {
  return (
    <Toolbar>
      <SearchWrapper>
        <HomeSearch />
      </SearchWrapper>
    </Toolbar>
  )
}

export default Header
