import Card from "../Cards";
import "./index.css";

const List = ({ listTransactions, filtered, handleList }) => {
  return (
    <ul className="container_ul">
      {listTransactions.length === 0 ? (
        <>
          <div className="container_ul-noCard">
            <h2>Você ainda não possui nenhum lançamento</h2>
            <figure>
              <img src="NoCard.svg" alt="Sem card" />
              <figcaption>Sem card</figcaption>
            </figure>
          </div>
        </>
      ) : (
        filtered.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            handleList={handleList}
            listTransactions={listTransactions}
          />
        ))
      )}
    </ul>
  );
};

export default List;
