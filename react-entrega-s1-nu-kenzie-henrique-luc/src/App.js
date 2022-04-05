import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario/Form";
import Lista from "./components/Lista/List";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  const addList = () => {
    setListTransactions([...listTransactions]);
  };

  return (
    <div className="App">
      <Header />
      <Formulario onSubmit={addList} />
    </div>
  );
}

export default App;
