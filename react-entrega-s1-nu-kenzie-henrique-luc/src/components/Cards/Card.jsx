import "./Card.css";

const Card = ({ transaction, handleList }) => {
  return (
    <li className="container_li">
      <section>
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
      </section>
      <section>
        <span>{transaction.value}</span>
        <button onClick={() => handleList(transaction.id)}>
          <figure>
            <img src="trash.svg" alt="Lixeira" />
            <figcaption>Lixeira</figcaption>
          </figure>
        </button>
      </section>
    </li>
  );
};

export default Card;
