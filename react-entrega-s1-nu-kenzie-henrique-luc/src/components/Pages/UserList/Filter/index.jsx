import "./index.css";
import Button from "../../../Button";
import { useState } from "react";

export default function Filter({ listTransactions, setFiltered }) {
  function filterAll() {
    setFiltered(listTransactions);
  }

  function filterEntrance() {
    const filteredEntrances = listTransactions.filter(
      (typeCard) => typeCard.type === "entrada"
    );
    setFiltered(filteredEntrances);
  }

  function filterExit() {
    const filteredExits = listTransactions.filter(
      (typeCard) => typeCard.type === "saida"
    );
    setFiltered(filteredExits);
  }

  return (
    <div className="container_filter">
      <h2>Resumo financeiro</h2>
      <section>
        <Button className={"grey_button"} onClick={() => filterAll()}>
          Todos
        </Button>
        <Button className={"grey_button"} onClick={() => filterEntrance()}>
          Entradas
        </Button>
        <Button className={"grey_button"} onClick={() => filterExit()}>
          Despesas
        </Button>
      </section>
    </div>
  );
}
