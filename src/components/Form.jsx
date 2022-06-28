import React from 'react';
import '../styles/Form.css';

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <h1 className="form-title">Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1">
            Attr01
            <input type="number" name="attr1" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input type="number" name="attr2" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input type="number" name="attr3" data-testid="attr3-input" />
          </label>
          <label htmlFor="imagem">
            Imagem
            <input type="text" name="imagem" data-testid="image-input" />
          </label>
          <label htmlFor="rare">
            Raridade
            <select name="rare" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
