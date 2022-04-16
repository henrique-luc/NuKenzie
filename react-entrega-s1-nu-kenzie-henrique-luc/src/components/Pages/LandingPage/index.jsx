import "./index.css";
import { useHistory } from "react-router-dom";

export default function LandingPage() {
  const history = useHistory();

  return (
    <div className="container_landingPage">
      <section>
        <figure>
          <img src="NuKenzie-Home.svg" alt="Logo Nu Kenzie" />
          <figcaption>Logo Nu Kenzie</figcaption>
        </figure>
        <h1>Centralize o controle das suas finanças</h1>
        <h3>de forma rápida e segura</h3>
        <button onClick={() => history.push("/nu-kenzie")}>Iniciar</button>
      </section>
      <section className="container_landingPage-img">
        <figure>
          <img src="Home.svg" alt="home" />
          <figcaption>home</figcaption>
        </figure>
      </section>
    </div>
  );
}
