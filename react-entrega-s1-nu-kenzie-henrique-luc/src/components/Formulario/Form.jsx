import { useState } from "react";

const Formulario = ({ addList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("entrada");
  const [count, setCount] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const itemCard = {
      description: description,
      type: type,
      value: value,
      id: count,
    };
    console.log(itemCard);
    setCount(count + 1);
    addList(itemCard);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="input_description">Descrição</label>
      <input
        type="text"
        id="input_description"
        name="input_description"
        placeholder="Digite aqui sua descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <small>Ex: Compra de roupas</small>
      <section>
        <div className="input_value">
          <label htmlFor="input_value">Valor</label>
          <input
            type="text"
            id="input_value"
            name="input_value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="input_type">
          <label htmlFor="input_type">Tipo de valor</label>
          <select
            name="input_type"
            id="input_type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </div>
      </section>
      <button type="submit">Inserir Valor</button>
    </form>
  );
};

export default Formulario;
