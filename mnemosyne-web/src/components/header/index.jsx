import logo from "../../assets/icons/mnemosyne-logo.svg";

const Header = () => {

  return (

      <header className="app-header">

        <img src={logo} alt="Mnemosyne Logo"></img>

        <div className="links">
          <a href="#">HOME</a>
          <a href="#">ADICIONAR MEMÓRIA</a>
        </div>

      </header>

  );

}

export default Header;