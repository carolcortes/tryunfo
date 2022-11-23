import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchCard.css';

class SearchCard extends React.Component {
  render() {
    const { handleSearch, disableSearch, searchTrunfo } = this.props;
    return (
      <div className="search-container">
        <h1>PESQUISAR CARTAS</h1>
        <div className="search-options">
          <label htmlFor="search-name">
            <input
              data-testid="name-filter"
              type="text"
              name="searchName"
              id="search-name"
              onChange={ handleSearch }
              disabled={ disableSearch }
              placeholder="Nome da carta"
            />
          </label>
          <label htmlFor="search-rare">
            <select
              data-testid="rare-filter"
              name="searchRare"
              id="search-rare"
              onChange={ handleSearch }
              disabled={ disableSearch }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="search-trunfo">
            <span className="tryunfo-search">SUPER TRYUNFO</span>
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              name="searchTrunfo"
              id="search-trunfo"
              checked={ searchTrunfo }
              onChange={ handleSearch }
            />
          </label>
        </div>
      </div>
    );
  }
}

SearchCard.propTypes = {
  handleSearch: PropTypes.func,
  disableSearch: PropTypes.bool,
  searchTrunfo: PropTypes.bool,
}.isRequired;

export default SearchCard;
