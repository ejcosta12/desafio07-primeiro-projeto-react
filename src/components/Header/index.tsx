import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const history = useHistory().location.pathname;
  return (
    <Container size={size} history={history}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className="listagem">
            <span>Listagem</span>
          </Link>
          <Link to="/import" className="importar">
            <span>Importar</span>
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
