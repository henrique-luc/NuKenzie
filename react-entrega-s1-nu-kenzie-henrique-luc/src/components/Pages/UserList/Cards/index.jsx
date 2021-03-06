import "./index.css";

const Card = ({ transaction, handleList }) => {
  return (
    <li className="container_card">
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
    </li>
  );
};

export default Card;
