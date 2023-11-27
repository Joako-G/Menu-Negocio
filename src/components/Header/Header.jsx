import icono from "../../assets/logo.jpeg"
import './Header.css';
const Header = () => {

  return (
    <>
      <header id="cabecera">
        <div className="row justify-content-ms-center">
          <div className="col-md-1 gy-3 gy-md-4 logo">
              <img src={icono}/>
          </div>
          <div className="col-md-4 col-6 offset-md-3 offset-3 titulo">
            <h2>EL TAMAL JUJEÑO</h2>
          </div>
        </div> 
      </header>
    </>
  )
}

export default Header;