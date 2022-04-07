import "./Card.css";

const Card = ({ transaction, handleList }) => {
  return (
    <li className="container_card">
      {transaction.type === "entrada" ? (
        <div className="color_card-green"></div>
      ) : (
        <div className="color_card-grey"></div>
      )}
      <div className="container_card-conteudo">
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
    </li>
  );
};

export default Card;
