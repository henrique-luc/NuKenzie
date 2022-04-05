const Formulario = (listTransactions, setListTransactions, addlist) => {
  return (
    <form>
      <label htmlFor="input_description">Descrição</label>
      <input
        type="text"
        id="input_description"
        name="input_description"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setListTransactions(event.target.value)}
      />
      <small>Ex: Compra de roupas</small>
      <section>
        <div className="input_value">
          <label htmlFor="input_value">Valor</label>
          <input
            type="text"
            id="input_value"
            name="input_value"
            onChange={(event) => setListTransactions(event.target.value)}
          />
        </div>
        <div className="input_type">
          <label htmlFor="input_type">Tipo de valor</label>
          <select name="input_type" id="input_type">
            <option value="entrada">Entrada</option>
            <option value="saida">Saida</option>
          </select>
        </div>
      </section>
      <button>Inserir Valor</button>
    </form>
  );
};

export default Formulario;
