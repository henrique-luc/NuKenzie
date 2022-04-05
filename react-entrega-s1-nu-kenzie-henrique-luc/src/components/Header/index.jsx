import Button from "../Button";
import "./style.css";

const Header = () => {
  return (
    <header className="container_header">
      <figure>
        <img src={"NuKenzie.svg"} alt="Nu Kenzie" />
        <figcaption>Nu kenzie</figcaption>
      </figure>
      <Button className="grey_button">Inicio</Button>
    </header>
  );
};

export default Header;
