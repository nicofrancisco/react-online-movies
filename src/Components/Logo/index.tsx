import React from 'react'
import { Link } from 'react-router-dom';

import { LogoStyle } from './styles'
import logoImage from '../../Assets/logo.nb.svg'

interface AppProps {}
const Logo: React.FC<AppProps> = () => {
  return (
    <Link to="/">
      <LogoStyle>
        <img src={logoImage} className="header-logo" alt="The Movie DB" />
      </LogoStyle>
    </Link>
  )
}

export default Logo
