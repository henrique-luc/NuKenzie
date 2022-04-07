import Card from "../Cards/Card";

const List = ({ listTransactions, handleList }) => {
  console.log(listTransactions);
  return (
    <ul className="container_ul">
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} handleList={handleList} />
      ))}
    </ul>
  );
};

export default List;
