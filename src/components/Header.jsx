function Header() {
  return (
    <header>
      <nav className="navegacao">
        <img className="logo" src="/img/logo_rodrigo.svg" alt="logo" />
        <ul className="menu">
          <li><a href="#Inicio" className="menu-link">Inicio</a></li>
          <li><a href="#sobre" className="menu-link">Sobre Mim</a></li>
          <li><a href="#projetos" className="menu-link">Projetos</a></li>
          <li><a href="#contato" className="menu-link">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
