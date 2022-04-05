import Card from "../Cards/Card";

const List = (listTransactions) => {
  listTransactions.map((transaction, index) => (
    <Card transaction={transaction} key={index} />
  ));
};

export default List;
