import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  function addList(newItem) {
    setListTransactions([...listTransactions, newItem]);
  }

  function handleList(listaItens) {
    const filtered = listTransactions.filter((item) => listaItens !== item.id);
    setListTransactions(filtered);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section className="container_form-left">
          <Form addList={addList} />
          <TotalMoney listTransactions={listTransactions} />
        </section>
        <List listTransactions={listTransactions} handleList={handleList} />
      </main>
    </div>
  );
}

export default App;
