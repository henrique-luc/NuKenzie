import "./index.css";

const TotalMoney = ({ listTransactions }) => {
  const totalValue = listTransactions.reduce((acumulator, currentValue) => {
    if (currentValue.type === "entrada") {
      return acumulator + Number(currentValue.value);
    } else {
      return acumulator - Number(currentValue.value);
    }
  }, 0);

  return (
    <div className="container_total_value">
      <section>
        <h2>Valor total:</h2>
        <small>O valor se refere ao saldo</small>
      </section>
      <span>$ {totalValue}</span>
    </div>
  );
};

export default TotalMoney;
