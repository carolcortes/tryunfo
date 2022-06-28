import React from 'react';
import '../styles/Form.css';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // onSaveButtonClick = (event) => {
  //   event.preventDefault();
  //   const { add } = this.props;
  //   add(this.state);
  // }

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
        <form onSubmit={ onSaveButtonClick }>
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              name="cardName"
              id="cardName"
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              name="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              id="cardDescription"
            />
          </label>
          <label htmlFor="cardAttr1">
            Attr01
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              id="cardAttr1"
            />
          </label>
          <label htmlFor="cardAttr2">
            Attr02
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              id="cardAttr2"
            />
          </label>
          <label htmlFor="cardAttr3">
            Attr03
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              id="cardAttr3"
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              id="cardImage"
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              id="cardRare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              id="cardTrunfo"
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
