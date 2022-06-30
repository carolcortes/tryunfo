import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSAveButtonDisabled: true,
    };
  }

  validateSaveButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxSumAttr = 210;
    const maxAttr = 90;
    const attr = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];

    const validateInfo = (cardName !== '' && cardDescription !== '' && cardImage !== '');
    const validateSum = attr.reduce((acc, num) => acc + num, 0) <= maxSumAttr;
    const validateAttr = attr.every((num) => num >= 0 && num <= maxAttr);

    return !([validateInfo, validateSum, validateAttr].every((el) => el === true));
  };

  onInputChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.setState({
      isSAveButtonDisabled: this.validateSaveButton(),
    }));
  }

  onSaveButtonClick = () => {
    const card = this.state;
    const { cards, cardTrunfo } = this.state;

    this.setState((prevState) => ({
      cards: [...prevState.cards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      isSAveButtonDisabled: true,
      cardTrunfo: false,
    }), () => this.setState({
      hasTrunfo: !!cardTrunfo || cards.some((el) => el.cardTrunfo),
    }));
  }

  removeCard = ({ cardName }) => {
    const { cards } = this.state;
    this.setState((prevState) => ({
      cards: prevState.cards.filter((card) => card.cardName !== cardName),
    }), () => {
      if (cards.some((card) => card.cardTrunfo === true && card.cardName === cardName)) {
        this.setState({ hasTrunfo: false });
      }
    });
  }

  render() {
    const {
      cards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSAveButtonDisabled,
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="add-new-card">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSAveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ hasTrunfo }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <p>Todas as cartas</p>
        { cards.map((card) => (
          <div id="caio" key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.removeCard(card) }
            >
              Excluir
            </button>
          </div>)) }
      </div>
    );
  }
}

export default App;
