import logo from "../../assets/icons/mnemosyne-logo.svg";

const Header = () => {

  return (

      <header className="app-header">

        <img src={logo} alt="Mnemosyne Logo"></img>

        <div className="links">
          <a href="/home">HOME</a>
          <a href="/new-memory">ADICIONAR MEMÓRIA</a>
        </div>

      </header>

  );

}

export default Header;