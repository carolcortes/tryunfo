import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import SearchCard from './components/SearchCard';
import prisonMike from './prison-mike.png';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [{
        cardName: 'Prison Mike',
        cardDescription: 'Prison is horrible! Stay out of it!',
        cardAttr1: 30,
        cardAttr2: 20,
        cardAttr3: 60,
        cardImage: prisonMike,
        cardRare: 'muito raro',
        cardTrunfo: false,
      }],
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
      searchName: '',
      searchRare: '',
      searchTrunfo: false,
      disableSearch: false,
    };
  }

  handleSearch = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value === 'todas' ? '' : value,
      disableSearch: !!checked,
    });
  }

  showCards = () => {
    const { searchTrunfo, cards, searchName, searchRare } = this.state;
    return (searchTrunfo ? cards.filter((card) => card.cardTrunfo)
      : cards.filter((card) => card.cardName.toLowerCase()
        .includes(searchName.toLowerCase()) && card.cardRare.startsWith(searchRare)));
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
      searchTrunfo,
      disableSearch,
    } = this.state;
    return (
      <div className="App">
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
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
        <SearchCard
          handleSearch={ this.handleSearch }
          disableSearch={ disableSearch }
          searchTrunfo={ searchTrunfo }
        />
        <div className="search-result">
          { this.showCards().map((card) => (
            <div key={ card.cardName } className="search-card-container">
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
      </div>
    );
  }
}

export default App;
