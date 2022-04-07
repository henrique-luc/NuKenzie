import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario/Form";
import Lista from "./components/Lista/List";
import DinheiroTotal from "./components/DinheiroTotal/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function addList(newItem) {
    setListTransactions([...listTransactions, newItem]);
  }

  function handleList(listaItens) {
    const filtrados = listTransactions.filter((item) => listaItens !== item.id);
    setListTransactions(filtrados);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section className="container_formulario-esq">
          <Formulario addList={addList} />
          <DinheiroTotal listTransactions={listTransactions} />
        </section>
        <Lista listTransactions={listTransactions} handleList={handleList} />
      </main>
    </div>
  );
}

export default App;
