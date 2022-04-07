import "./TotalMoney.css";

const TotalMoney = ({ listTransactions }) => {
  const valorTotal = listTransactions.reduce((acumulador, currentValue) => {
    if (currentValue.type === "entrada") {
      return acumulador + Number(currentValue.value);
    } else {
      return acumulador - Number(currentValue.value);
    }
  }, 0);

  return (
    <div className="container_valor_Total">
      <section>
        <h2>Valor total:</h2>
        <small>O valor se refere ao saldo</small>
      </section>
      <span>$ {valorTotal}</span>
    </div>
  );
};

export default TotalMoney;
