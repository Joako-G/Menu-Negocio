import "./Footer.css";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="row" id="MyFooter">
          <div className="col-3 direccion offset-1">
            <h1>Direccion</h1>
            <p>Av. Carlos snopek N°1233 - Barrio Alto Comedero</p>
          </div>
          <div className="col-3 redes offset-1">
            <h1>Redes Sociales</h1>
            <a target="_blank" href="https://www.instagram.com/tamaljujuy/" rel="noopener noreferrer">
            <GrInstagram />
            </a>
          </div>
          <div className="col-3 offset-1 contacto">
            <h1>Contacto</h1>
            <BsWhatsapp />
            <p className="celular">388 - 4095206 (Solo Whatsapp)</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
