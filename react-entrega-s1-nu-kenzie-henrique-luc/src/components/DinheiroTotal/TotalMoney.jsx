export const TotalMoney = (listTransactions) => {
  const valorTotal = listTransactions.reduce((acumulador, currentValue) => {
    return acumulador.value + currentValue;
  }, 0);

  return valorTotal;
};
