import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="card">
        <h3 data-testid="name-card">{ cardName }</h3>
        <div className="image-card">
          { cardImage && (
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          ) }
        </div>
        <div className="description-card">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <p data-testid="attr1-card" className="attribute">
          <b>ATRIBUTO 1</b>
          {' '}
          { cardAttr1 !== 0 && cardAttr1 }
        </p>
        <p data-testid="attr2-card" className="attribute">
          <b>ATRIBUTO 2</b>
          {' '}
          { cardAttr2 !== 0 && cardAttr2 }
        </p>
        <p data-testid="attr3-card" className="attribute">
          <b>ATRIBUTO 3</b>
          {' '}
          { cardAttr3 !== 0 && cardAttr3 }
        </p>
        <h5 data-testid="rare-card">{ cardRare }</h5>
        { cardTrunfo && <h4 data-testid="trunfo-card">Super Trunfo</h4> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardImage: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;

export default Card;
