import React from 'react';
import '../styles/Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="form">
        <h1 className="form-title">Adicionar nova carta</h1>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            Attr01
            <input
              type="number"
              name="attr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2">
            Attr02
            <input
              type="number"
              name="attr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3">
            Attr03
            <input
              type="number"
              name="attr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="imagem">
            Imagem
            <input
              type="text"
              name="imagem"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare">
            Raridade
            <select
              name="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              name="trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
