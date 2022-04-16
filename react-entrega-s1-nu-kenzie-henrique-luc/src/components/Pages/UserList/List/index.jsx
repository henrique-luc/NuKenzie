import Card from "../Cards";

const List = ({ listTransactions, handleList }) => {
  return (
    <ul className="container_ul">
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} handleList={handleList} />
      ))}
    </ul>
  );
};

export default List;
