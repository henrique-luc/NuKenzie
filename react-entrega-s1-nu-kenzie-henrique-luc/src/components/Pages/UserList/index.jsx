import "./index.css";

import Header from "./Header";
import Form from "./Form";
import List from "./List";
import TotalMoney from "./TotalMoney";

import { useState } from "react";

export default function UserList() {
  const [listTransactions, setListTransactions] = useState([]);

  function addList(newItem) {
    setListTransactions([...listTransactions, newItem]);
  }

  function handleList(listaItens) {
    const filtered = listTransactions.filter((item) => listaItens !== item.id);
    setListTransactions(filtered);
  }

  return (
    <div className="UserList">
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
