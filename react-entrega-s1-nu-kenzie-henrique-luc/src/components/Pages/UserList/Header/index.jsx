import Button from "../../../Button";
import "./style.css";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <header className="container_header">
      <figure>
        <img src={"NuKenzie.svg"} alt="Nu Kenzie" />
        <figcaption>Nu kenzie</figcaption>
      </figure>
      <Button className="grey_button" onClick={() => history.push("/")}>
        Inicio
      </Button>
    </header>
  );
};

export default Header;
