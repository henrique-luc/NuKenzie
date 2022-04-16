import "./index.css";

const Card = ({ transaction, handleList, listTransactions }) => {
  return (
    <li className="container_card">
      {listTransactions.length === 0 ? (
        <>
          <div>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <figure>
              <img src="NoCard.svg" alt="Sem card" />
              <figcaption>Sem card</figcaption>
            </figure>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              transaction.type === "entrada"
                ? "color_card-green"
                : "color_card-grey"
            }
          ></div>

          <div className="container_card-content">
            <section>
              <h2>{transaction.description}</h2>
              <p>{transaction.type}</p>
            </section>
            <section>
              <span>R$ {transaction.value}</span>
              <button onClick={() => handleList(transaction.id)}>
                <figure>
                  <img src="trash.svg" alt="Lixeira" />
                  <figcaption>Lixeira</figcaption>
                </figure>
              </button>
            </section>
          </div>
        </>
      )}
    </li>
  );
};

export default Card;
